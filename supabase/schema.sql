-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
CREATE TYPE user_role AS ENUM ('admin', 'student');
CREATE TYPE payment_type AS ENUM ('ONE_TIME', 'SUBSCRIPTION');
CREATE TYPE payment_status AS ENUM ('PENDING', 'PARTIAL_PAID', 'FULL_PAID', 'FAILED');
CREATE TYPE enrollment_status AS ENUM ('PENDING', 'ENROLLED', 'CERTIFICATE_ELIGIBLE');
CREATE TYPE course_category AS ENUM ('AI_SECURITY', 'CYBERSECURITY', 'WEB3_SECURITY');
CREATE TYPE event_type AS ENUM ('PAST', 'UPCOMING');
CREATE TYPE transaction_status AS ENUM ('SUCCESS', 'FAILED', 'PENDING');

-- Profiles table
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    phone TEXT,
    avatar_url TEXT,
    role user_role DEFAULT 'student',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL DEFAULT 100.00,
    category course_category NOT NULL,
    features JSONB DEFAULT '[]'::jsonb,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE enrollments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    payment_type payment_type NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    amount_paid DECIMAL(10, 2) DEFAULT 0.00,
    payment_status payment_status DEFAULT 'PENDING',
    enrollment_status enrollment_status DEFAULT 'PENDING',
    subscription_id TEXT,
    next_payment_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, course_id)
);

-- Payments table
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    enrollment_id UUID NOT NULL REFERENCES enrollments(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method TEXT DEFAULT 'paystack',
    paystack_reference TEXT UNIQUE NOT NULL,
    status transaction_status DEFAULT 'PENDING',
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_name TEXT NOT NULL,
    student_role TEXT NOT NULL,
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
    avatar_url TEXT,
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Outreach programs table
CREATE TABLE outreach_programs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    event_type event_type NOT NULL,
    image_url TEXT,
    registration_link TEXT,
    max_attendees INTEGER,
    current_attendees INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Outreach registrations table
CREATE TABLE outreach_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    program_id UUID NOT NULL REFERENCES outreach_programs(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    institution TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_enrollments_user_id ON enrollments(user_id);
CREATE INDEX idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX idx_enrollments_status ON enrollments(enrollment_status);
CREATE INDEX idx_payments_enrollment_id ON payments(enrollment_id);
CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_reference ON payments(paystack_reference);
CREATE INDEX idx_testimonials_approved ON testimonials(is_approved);
CREATE INDEX idx_outreach_programs_type ON outreach_programs(event_type);
CREATE INDEX idx_outreach_programs_date ON outreach_programs(event_date);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE outreach_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE outreach_registrations ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
    ON profiles FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
    ON profiles FOR UPDATE
    USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
    ON profiles FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Courses policies (public read access)
CREATE POLICY "Anyone can view active courses"
    ON courses FOR SELECT
    USING (is_active = true);

CREATE POLICY "Admins can manage courses"
    ON courses FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Enrollments policies
CREATE POLICY "Users can view their own enrollments"
    ON enrollments FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own enrollments"
    ON enrollments FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "System can update enrollments"
    ON enrollments FOR UPDATE
    USING (true);

CREATE POLICY "Admins can view all enrollments"
    ON enrollments FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Payments policies
CREATE POLICY "Users can view their own payments"
    ON payments FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "System can create payments"
    ON payments FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins can view all payments"
    ON payments FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Testimonials policies (public read for approved)
CREATE POLICY "Anyone can view approved testimonials"
    ON testimonials FOR SELECT
    USING (is_approved = true);

CREATE POLICY "Admins can manage all testimonials"
    ON testimonials FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Outreach programs policies (public read)
CREATE POLICY "Anyone can view active outreach programs"
    ON outreach_programs FOR SELECT
    USING (is_active = true);

CREATE POLICY "Admins can manage outreach programs"
    ON outreach_programs FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Outreach registrations policies
CREATE POLICY "Anyone can create registrations"
    ON outreach_registrations FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Admins can view all registrations"
    ON outreach_registrations FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Functions

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to automatically update updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_enrollments_updated_at BEFORE UPDATE ON enrollments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_outreach_programs_updated_at BEFORE UPDATE ON outreach_programs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, role)
    VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', 'student');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Insert sample courses
INSERT INTO courses (title, description, price, category, features) VALUES
(
    'AI Security',
    'Master the security challenges of artificial intelligence systems',
    100.00,
    'AI_SECURITY',
    '["AI Model Security", "Adversarial Machine Learning", "Data Poisoning Prevention", "Secure AI Development", "AI Ethics & Compliance", "Real-world AI Security Labs"]'::jsonb
),
(
    'Cybersecurity',
    'Comprehensive training in modern cybersecurity practices',
    100.00,
    'CYBERSECURITY',
    '["Network Security Fundamentals", "Penetration Testing", "Security Operations Center (SOC)", "Incident Response", "Cloud Security", "Hands-on Security Labs"]'::jsonb
),
(
    'Web3 Security',
    'Secure the future of decentralized applications',
    100.00,
    'WEB3_SECURITY',
    '["Smart Contract Auditing", "Blockchain Security", "DeFi Protocol Security", "NFT Security", "Wallet Security", "Real Web3 Vulnerabilities"]'::jsonb
);

-- Insert sample testimonials
INSERT INTO testimonials (student_name, student_role, content, rating, is_approved) VALUES
(
    'Adebayo Johnson',
    'Security Analyst at TechCorp',
    'Ancientech Academy transformed my career. The hands-on approach and expert instructors gave me the skills I needed to land my dream job in cybersecurity.',
    5,
    true
),
(
    'Chioma Okafor',
    'Penetration Tester',
    'The Web3 Security course was incredible. I learned practical skills that I use every day in my work. The community support is outstanding.',
    5,
    true
),
(
    'Ibrahim Mohammed',
    'AI Security Researcher',
    'Best investment I''ve made in my education. The AI Security track covered everything from fundamentals to advanced topics. Highly recommended!',
    5,
    true
);
