CREATE TABLE IF NOT EXISTS reviews (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id UUID NOT NULL REFERENCES submissions(id) ON DELETE CASCADE,
  reviewer_id   UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Scores (1-5)
  originality   INT CHECK (originality >= 1 AND originality <= 5),
  quality       INT CHECK (quality >= 1 AND quality <= 5),
  relevance     INT CHECK (relevance >= 1 AND relevance <= 5),
  clarity       INT CHECK (clarity >= 1 AND clarity <= 5),
  
  overall_score FLOAT, -- Calculated average or sum
  
  reviewer_comments TEXT,    -- Visible to author (anonymized)
  confidential_comments TEXT, -- Visible only to chairs
  
  recommendation TEXT CHECK (recommendation IN ('strong_accept','accept',
                                               'weak_accept','borderline',
                                               'weak_reject','reject',
                                               'strong_reject')),
  
  status        TEXT NOT NULL DEFAULT 'assigned'
                  CHECK (status IN ('assigned','in_progress','completed')),
  
  assigned_at   TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(submission_id, reviewer_id)
);

CREATE INDEX IF NOT EXISTS idx_reviews_submission ON reviews(submission_id);
CREATE INDEX IF NOT EXISTS idx_reviews_reviewer   ON reviews(reviewer_id);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Reviewers see their own assigned reviews
CREATE POLICY "reviewers see own reviews" ON reviews
  FOR SELECT USING (reviewer_id = auth.uid());

CREATE POLICY "reviewers update own reviews" ON reviews
  FOR UPDATE USING (reviewer_id = auth.uid())
  WITH CHECK (reviewer_id = auth.uid());

-- Admins see all reviews
CREATE POLICY "admins see all reviews" ON reviews
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid()
    AND role IN ('admin','general_chair','program_chair','track_chair'))
  );
