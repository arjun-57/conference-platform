CREATE TABLE IF NOT EXISTS registrations (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  package_type  TEXT NOT NULL, -- 'studentAuthor', 'regularAuthor', etc.
  amount        FLOAT NOT NULL,
  currency      TEXT DEFAULT 'USD',
  
  status        TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending', 'paid', 'failed', 'refunded')),
                  
  payment_id    TEXT, -- Transaction ID from Stripe/Razorpay
  payment_method TEXT,
  
  paid_at       TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  
  UNIQUE(user_id) -- Only one registration per user for this conference
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Users see their own registration
CREATE POLICY "users see own registration" ON registrations
  FOR SELECT USING (user_id = auth.uid());

-- Admins see all registrations
CREATE POLICY "admins see all registrations" ON registrations
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid()
    AND role IN ('admin','general_chair','finance_chair'))
  );

-- Function to mark paper as 'payment_received' if it was rejected/accepted?
-- No, registration is for the USER (author). One registration covers all their papers usually.
-- But we need a flag to enable camera-ready.
