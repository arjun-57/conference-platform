CREATE TABLE IF NOT EXISTS submissions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title         TEXT NOT NULL,
  abstract      TEXT NOT NULL,
  keywords      TEXT[] NOT NULL,
  track         TEXT NOT NULL,
  co_authors    JSONB DEFAULT '[]',  -- [{name, email, institution}]
  pdf_path      TEXT,                -- path in Supabase Storage (not URL)
  revised_pdf_path TEXT,             -- path after revision upload
  status        TEXT NOT NULL DEFAULT 'submitted'
                  CHECK (status IN ('submitted','under_review',
                                    'accepted','rejected',
                                    'minor_revision','major_revision',
                                    'camera_ready')),
  admin_notes   TEXT,                -- NEVER visible to author
  decision_note TEXT,                -- sent to author on status change
  submitted_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status);
CREATE INDEX IF NOT EXISTS idx_submissions_track  ON submissions(track);
CREATE INDEX IF NOT EXISTS idx_submissions_author ON submissions(author_id);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "authors see own submissions" ON submissions
  FOR SELECT USING (author_id = auth.uid());

CREATE POLICY "authors insert own submissions" ON submissions
  FOR INSERT WITH CHECK (author_id = auth.uid());

CREATE POLICY "authors update own for revision" ON submissions
  FOR UPDATE USING (author_id = auth.uid()
    AND status IN ('minor_revision','major_revision'))
  WITH CHECK (author_id = auth.uid());

CREATE POLICY "admins see all submissions" ON submissions
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid()
    AND role IN ('admin','general_chair','program_chair','track_chair'))
  );
