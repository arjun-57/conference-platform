-- Future-only schema for registration after a paper is accepted in Microsoft CMT.
-- This migration is not used by the current public website.

CREATE TABLE IF NOT EXISTS post_acceptance_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cmt_paper_id TEXT NOT NULL,
  corresponding_author_email TEXT NOT NULL,
  paper_title TEXT NOT NULL,
  registration_type TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  payment_reference TEXT,
  paid_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (cmt_paper_id)
);
