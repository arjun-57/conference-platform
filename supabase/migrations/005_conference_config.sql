CREATE TABLE IF NOT EXISTS conference_config (
  key        TEXT PRIMARY KEY,
  value      JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO conference_config (key, value) VALUES
  ('submission_deadline', '"2026-01-15T23:59:59Z"'),
  ('review_deadline',     '"2026-02-28T23:59:59Z"'),
  ('notification_date',   '"2026-03-15T00:00:00Z"'),
  ('camera_ready_date',   '"2026-04-01T00:00:00Z"'),
  ('registration_open',   'true'),
  ('payment_required',    'true'),
  ('submission_open',     'true')
ON CONFLICT (key) DO NOTHING;
