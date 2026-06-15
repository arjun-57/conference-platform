-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Users can view and update only their own profile
CREATE POLICY "users view own profile" ON profiles
  FOR SELECT USING (id = auth.uid());

CREATE POLICY "users update own profile" ON profiles
  FOR UPDATE USING (id = auth.uid());

-- Admins can see all profiles
CREATE POLICY "admins see all profiles" ON profiles
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid()
    AND role IN ('admin','general_chair','program_chair','track_chair'))
  );
