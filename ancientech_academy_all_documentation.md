# Ancientech Academy

## Project Description
Build a production-ready website for Ancientech cybersecurity academy.

Tech Stack:

Next.js frontend

Supabase backend (PostgreSQL, Auth, RLS, Edge Functions)

Paystack integration for payments

Requirements:

Landing Page:

Hero section

3 pricing cards ($100 each):

AI Security

Cybersecurity

Web3 Security

Payment type selection (one-time or subscription)

Student testimonials

Certificate section labeled “Coming Soon”

Save & Enroll Page:

Supabase authentication

Dashboard showing:

Total goal amount

Amount paid

Progress bar

Payment history

Remaining balance

Subscription status

Secure Paystack payment verification using Supabase Edge Functions

Cyber Awakening Page:

Display outreach programs in Nigeria

Show past and upcoming events

Registration form

Admin Panel:

Role-based access (admin/student)

Manage users

Manage payments

Manage testimonials

Manage programs

Enable Row Level Security policies for data protection

## Product Requirements Document
PRODUCT REQUIREMENTS DOCUMENT (PRD) - ANCIENTECH ACADEMY

1. INTRODUCTION

1.1. Project Overview
Ancientech Academy is a specialized cybersecurity education platform aimed at training the next generation of security professionals. This PRD details the requirements for building a production-ready website leveraging Next.js for the frontend and Supabase (PostgreSQL, Auth, RLS, Edge Functions) for the backend, integrated with Paystack for payment processing.

1.2. Goals
*   Establish a professional, secure, and scalable platform for course enrollment and management.
*   Provide a seamless payment experience integrated with Paystack.
*   Implement robust user authentication and authorization using Supabase Auth and RLS.
*   Clearly articulate course offerings and pricing structures.
*   Facilitate community engagement via outreach program documentation.

1.3. Target Audience
*   Primary Audience: University students seeking specialized cybersecurity skills.
*   Secondary Audience: Anyone interested in pursuing cybersecurity, AI Security, or Web3 Security training.

1.4. Design and Branding Direction
The aesthetic direction should emulate a professional, modern, and trustworthy feel, similar to: https://cyberplural.com. As this is an academy structure involving admissions and lectures, the design must convey credibility and academic rigor.

2. FUNCTIONAL REQUIREMENTS

2.1. Landing Page (Public Access)

2.1.1. Hero Section
*   Must prominently feature the academy's value proposition.
*   Clear Call-to-Action (CTA) directing users to the Save & Enroll or main course information.

2.1.2. Pricing Cards (3 Offerings)
*   Three distinct courses/tracks: AI Security, Cybersecurity, Web3 Security.
*   Base price point for full access: $100 USD per course/track.
*   For each card, users must be able to select the payment type: One-Time Full Payment or Save & Enroll (TBD Scope).

2.1.3. Student Testimonials
*   Display rotating or static testimonials from successful students or industry partners.

2.1.4. Certificate Section
*   A dedicated section clearly labeled \"Coming Soon\" indicating future certification capabilities.

2.2. Save & Enroll / Student Dashboard (Authenticated Access)

2.2.1. Authentication
*   Utilize Supabase Auth for sign-up and login (Email authentication required).

2.2.2. Student Dashboard Display
Upon successful enrollment/admission, the student accesses a dashboard displaying:
*   Total Goal Amount (Defined based on course price, likely $100, or accumulated goal for Save & Enroll).
*   Amount Paid (Cumulative payments made).
*   Progress Bar (Visual representation of payment progress relative to the goal amount).
*   Payment History (Transaction logs linked to Paystack receipts).
*   Remaining Balance (Total Goal - Amount Paid).
*   Subscription Status (If applicable; currently TBD, but structure must support it).

2.2.3. Payment Processing and Verification
*   Integration with Paystack for handling all financial transactions.
*   **Critical Security Requirement**: All payment verification and confirmation must be handled securely via Supabase Edge Functions to prevent client-side manipulation.

2.3. Cyber Awakening Page (Public/Student View)

2.3.1. Outreach Program Display
*   Section dedicated to showcasing Ancientech Academy's outreach programs, focusing specifically on activities within Nigeria.
*   Display past events (archived) and upcoming events (with registration links).

2.3.2. Registration Form
*   A form for users to register interest or sign up for upcoming outreach events. Data must be stored securely in Supabase.

2.4. Admin Panel (Role-Based Access)

2.4.1. Access Control
*   Strict Role-Based Access Control (RBAC) enforced: Admin vs. Student roles managed via Supabase Auth Metadata or RLS policies.

2.4.2. Admin Functions
Admins must be able to perform the following management tasks:
*   Manage Users (View, disable accounts).
*   Manage Payments (View transaction logs, reconcile payments).
*   Manage Testimonials (Add, edit, approve).
*   Manage Programs (Create, edit, delete/archive courses and outreach events).
    *   **Note on Program Management**: All necessary fields/data points required for a comprehensive course definition (e.g., title, description, prerequisites, modules, etc.) must be supported in the backend schema.
    *   **Note on Landing Page Edits**: Admins must be able to directly edit program details displayed on the public Landing Page via this panel.

2.4.3. Student Profile Viewing (Admin/Student Distinction)
*   Admin Role: Can edit program details displayed on the landing page and student-facing pages. Can view any student's profile/payment status.
*   Student Role: Can view their own dashboard and payment history. Can view *another* student's public-facing profile/progress (if required for peer accountability, specific requirements TBD, default to viewing own data only unless specified).

3. USER ONBOARDING AND ACCESS FLOW

3.1. Registration Flow
1.  User signs up via Supabase Auth (Email required).
2.  User selects a course/payment plan on the Landing Page and initiates payment via Paystack.
3.  Edge Function verifies payment success.
4.  Upon successful verification (Full Payment or initial Save & Enroll deposit):
    *   User status is updated in the database (admitted/enrolled).
    *   An automated welcome/admission confirmation email is sent to the user.
    *   The user is automatically allocated to their respective classes/modules (backend assignment logic required).

3.2. Content Gating
*   **No content access (course modules, restricted dashboard features) is permitted until at least half the total payment amount is received.**
*   Full payment grants complete access to the course materials and academy resources.

4. DATA STRUCTURE AND MANAGEMENT

4.1. Supabase Schema Requirements
*   Users Table (Linked to Supabase Auth, extended with role, admission status, payment goal).
*   Payments Table (Transaction IDs, amounts, course associated, status).
*   Testimonials Table (Content, author, status: pending/approved).
*   Programs Table (Courses, outreach events, defining fields for both types).

4.2. Certificate Downloadability
*   Yes, generated certificates must be downloadable by the student upon satisfying course completion criteria.

4.3. Data Retention and Privacy
*   Data retention policies must align with best practices for educational and financial data. Personally Identifiable Information (PII) and payment records must be stored securely, encrypted where appropriate, and only retained as long as necessary for academic, auditing, or regulatory purposes. Specific retention schedules will be defined in a separate Data Governance document, but robust mechanisms must be in place for secure deletion upon request or defined expiry.

5. NON-FUNCTIONAL REQUIREMENTS (NFRs)

5.1. Performance
*   Page load times must be optimized (target < 3 seconds on standard broadband connections) leveraging Next.js server-side rendering/static generation where appropriate.
*   Dashboard updates upon payment confirmation must be near real-time.

5.2. Security
*   All endpoints must be secured using JWTs managed by Supabase Auth.
*   **Row Level Security (RLS) must be enabled and strictly enforced** on all database tables to ensure users only access data pertinent to their roles and ownership.
*   Payment verification logic must reside exclusively in Edge Functions.

5.3. Scalability
*   The architecture (Next.js/Supabase) must support anticipated growth in student enrollment without significant re-architecture.

5.4. Reliability and Availability
*   The platform should aim for 99.9% uptime, prioritizing stable payment verification services.

6. INTEGRATION REQUIREMENTS

6.1. Paystack Integration and Verification Flow
*   Client-side interaction initiates the Paystack redirect.
*   Upon payment success/failure, Paystack calls back to a dedicated Supabase Edge Function endpoint.
*   The Edge Function securely queries the Paystack API (using secret keys) to confirm transaction validity.
*   If confirmed, the Edge Function updates the PostgreSQL database, triggering user admission logic.

6.2. Email Authentication
*   Standard Supabase Email Authentication flow must be used for user registration and password resets.

7. PRICING STRUCTURE CLARIFICATION (Scope Definition)

7.1. Full Payment Option
*   Selecting this grants immediate access to the entire course curriculum and full enrollment status in the Academy, contingent upon the $100 payment.

7.2. Save & Enroll Option
*   This option facilitates enrollment after the student meets a predetermined initial deposit threshold (e.g., 50% of the total cost).
*   **Scope Note**: The exact threshold, remaining balance handling, and subsequent payment schedule details are to be defined and implemented in a future scope iteration (TBD). The current system must support the calculation of 'Total Goal', 'Amount Paid', and 'Remaining Balance' to accommodate this structure.

## Technology Stack
TECHNOLOGY STACK DOCUMENTATION - ANCIENTECH ACADEMY

1. INTRODUCTION
This document outlines the recommended technology stack for building the production-ready website for Ancientech Academy. The stack is chosen to ensure scalability, security, rapid development, and seamless integration of required features, particularly focusing on robust authentication, payment processing, and data management.

2. CORE STACK COMPONENTS

2.1. Frontend Framework: Next.js (React)
Justification:
*   Server-Side Rendering (SSR) and Static Site Generation (SSG) capabilities for fast initial load times and SEO performance, critical for marketing pages.
*   Excellent developer experience and built-in tooling.
*   Simplifies complex routing required for marketing, student portals, and admin interfaces.
*   Supports modern React features necessary for dynamic dashboards.

2.2. Backend & Database: Supabase
Justification:
*   **PostgreSQL Database:** Reliable, scalable relational database suitable for structured user, payment, and course data.
*   **Authentication (Auth):** Provides secure, ready-to-use authentication (including Email authentication as required) with built-in session management.
*   **Row Level Security (RLS):** Essential for implementing granular access control, protecting user data, and enforcing admin/student roles directly at the database level.
*   **Storage:** Future-proofing for storing course materials or downloadable certificates.
*   **Realtime Capabilities (Optional but beneficial):** Allows for potential future interactive elements.

2.3. Serverless Functions: Supabase Edge Functions (Deno/TypeScript)
Justification:
*   Required for secure, server-side logic, specifically:
    *   Verifying Paystack transactions securely (preventing client-side tampering).
    *   Handling sensitive API interactions related to payment gateways.
    *   Implementing necessary automation steps (e.g., sending enrollment confirmation emails post-payment verification).

2.4. Payment Gateway: Paystack
Justification:
*   Industry-standard payment processing in the target region (Nigeria).
*   Provides necessary APIs for both one-time payments and subscription modeling (though subscription fulfillment logic will be handled via Edge Functions/Database).

3. FRONTEND IMPLEMENTATION DETAILS

3.1. Landing Page
*   Built using Next.js components.
*   **Pricing Cards:** Must dynamically handle the selection between one-time payment and the "Save & Enroll" option structure.
*   **Testimonials:** Fetched securely from Supabase (requires Admin management via the Admin Panel).
*   **Certificate Section:** Placeholder implementation indicating future availability.

3.2. Save & Enroll Page (Student Portal Initial View)
*   Protected route requiring Supabase Authentication.
*   **Dashboard View:**
    *   Displays real-time aggregated data sourced from the PostgreSQL database (Total Goal, Amount Paid, Progress Bar calculation, Subscription Status).
    *   Payment History table requiring RLS policies to show only the authenticated user's history.
    *   Integration point for triggering the secure Paystack checkout process.

4. BACKEND & DATA MANAGEMENT (SUPABASE FOCUS)

4.1. Authentication & User Management
*   Email-based authentication via Supabase Auth.
*   User profiles stored in the `profiles` table (linked to `auth.users`).
*   **Role Assignment:** A field in the `profiles` table (`role`: 'admin' or 'student') dictates access permissions.

4.2. Data Structure & RLS
*   **Security First:** Comprehensive RLS policies must be implemented on all sensitive tables (e.g., Users, Payments, Enrollments).
*   **Admin Role Permissions:** Admins must have full CRUD access across all relevant tables via policies that check `request.user_role() = 'admin'`.
*   **Student Role Permissions:** Students should generally only be able to SELECT their own records (e.g., own payment history, own progress).
    *   *Specific Requirement Handling:* Admin needs to edit programs, which might reside on a `programs` table. Policies must allow Admins to modify this, while students only read it.
    *   *Specific Requirement Handling:* Students can *view* another student's page (e.g., for leaderboard purposes, if implemented), requiring a permissive SELECT policy on specific non-sensitive profile views, but this must be explicitly defined and restricted away from PII.

4.3. Program Management
*   A dedicated `programs` table will store details for all courses (AI Security, Cybersecurity, Web3 Security).
*   **Required Fields (Data Points):** Program Name, Description, Course Outline/Modules (JSONB or related table), Price (Base), Duration/Schedule, Target Audience, Prerequisites, Prerequisites Met Status (for admin tracking).

4.4. Payment Handling and Enrollment Flow
1.  User initiates payment on the Next.js frontend.
2.  Frontend directs to Paystack, capturing the session ID.
3.  Paystack redirects back to a defined webhook/callback URL handled by a **Supabase Edge Function**.
4.  The Edge Function securely verifies the transaction signature with Paystack secrets.
5.  **Success Action:** If verified, the Edge Function updates the `payments` table in PostgreSQL, updates the user's balance/status in the `profiles` table, and triggers an automated enrollment/welcome email.
6.  **Enrollment Access:** User access to detailed course content (if gated beyond the dashboard) is determined by a flag (e.g., `is_fully_paid`) in the user profile, which is checked on route loading.

5. ADMIN PANEL
*   Built as a section within the Next.js application, protected by RLS policies enforced via Supabase authentication checks.
*   **Features:**
    *   User Management (View/Deactivate users, assign roles).
    *   Payment Management (View transaction logs, manually verify or reconcile payments).
    *   Testimonial Management (CRUD operations).
    *   Program Management (CRUD operations linked directly to the `programs` table).

6. DATA RETENTION AND PRIVACY
*   Data retention will align with GDPR/local compliance standards. Personally Identifiable Information (PII) stored in Supabase (`profiles`, `payments`) will be retained as long as the user account is active or as required by financial audit regulations (typically 7 years for transaction records).
*   Data minimization principles will be applied; only necessary data for academy operations (enrollment, certification, payment history) will be collected and retained.

7. NON-FUNCTIONAL REQUIREMENTS (Best Practice Selection)
*   **Performance:** Achieved via Next.js (SSG/SSR), optimized database queries, and CDN integration (Vercel/Netlify hosting highly recommended).
*   **Security:** Enforced via Supabase RLS, secure server-side Paystack verification, input validation on all forms, and standard security headers (handled well by modern Next.js deployments).
*   **Scalability:** Supabase and PostgreSQL provide robust scaling capabilities to handle an increasing number of users and transactions.
*   **Observability:** Basic logging will be implemented within Edge Functions for debugging payment issues.

8. DESIGN AND BRANDING DIRECTION
*   The look and feel will draw inspiration from the professional, clean aesthetic found at https://cyberplural.com.
*   The academy focus will necessitate clear layouts for course navigation, enrollment instructions, and student progress visualization, moving beyond a purely informational marketing site to a functional learning platform interface.

9. USER ONBOARDING AND ACCESS FLOW
1.  User registers/logs in via Supabase Auth.
2.  User selects a course/payment option on the Landing Page.
3.  User pays (via Paystack integration confirmed by Edge Function).
4.  Upon successful payment confirmation:
    a. User status is updated in the database.
    b. Enrollment confirmation email is triggered via Edge Function.
    c. User is considered admitted to the academy structure.
5.  Access to specific class/course content is gated based on the payment status flags associated with their profile. If 'half payment' is selected (Save & Enroll), they gain initial access but may be blocked from advanced sections until the remaining balance is settled.

10. CERTIFICATE GENERATION
*   Certificates will be generated dynamically upon course completion or full payment (depending on academy policy).
*   The system will use a dedicated service or logic within Edge Functions to generate a downloadable PDF file containing the student's details and a verification hash/QR code, stored temporarily in Supabase Storage for download.

## Project Structure
PROJECT STRUCTURE DOCUMENT: ANCIENTECH ACADEMY

1. OVERVIEW

This document outlines the directory structure and file organization for the Ancientech Academy production-ready website, built on Next.js and utilizing Supabase for the backend services.

2. ROOT DIRECTORY (`/`)

| File/Folder | Type | Description |
| :--- | :--- | :--- |
| `.env.local` | File | Environment variables (Supabase keys, Paystack keys, etc.). Should be added to .gitignore. |
| `package.json` | File | Project dependencies and scripts. |
| `next.config.js` | File | Next.js configuration file. |
| `tsconfig.json` | File | TypeScript configuration. |
| `README.md` | File | General project overview, setup instructions, and deployment guidelines. |
| `supabase/` | Directory | Local Supabase definitions (Database schema migrations, types generation). |
| `public/` | Directory | Static assets (images, fonts, favicons). |
| `src/` | Directory | Primary source code location. |

3. `src/` DIRECTORY STRUCTURE

The `src/` directory organizes the application into logical frontend (Next.js pages/components) and backend integration layers.

| Folder | Description |
| :--- | :--- |
| `app/` | Next.js route handling (Pages, Layouts, API Routes). |
| `components/` | Reusable UI components (shared across multiple pages). |
| `contexts/` | React Context Providers (e.g., AuthContext, ThemeContext). |
| `hooks/` | Custom React Hooks. |
| `lib/` | Utility functions, external service initialization (Supabase client, Paystack configuration). |
| `styles/` | Global and project-specific styling (CSS/SCSS modules). |
| `types/` | TypeScript definitions and interfaces. |

4. `src/app/` DIRECTORY STRUCTURE (Routing)

This structure adheres to the Next.js App Router convention.

| Path | Description | Requirements Met |
| :--- | :--- | :--- |
| `(marketing)/` | Route Group for public-facing marketing pages. | Landing Page, Branding |
| `(auth)/` | Route Group for login/signup flows. | Supabase Auth |
| `(dashboard)/` | Route Group for logged-in student/admin dashboards. | Save & Enroll Page, Admin Panel Access |
| `api/` | Next.js Server Actions or Route Handlers (API endpoints). | Paystack Verification |
| `layout.tsx` | Root layout. | Global structure, branding application. |

---
4.1. `(marketing)/` Route Group Details

| File/Folder | Description |
| :--- | :--- |
| `page.tsx` | **Landing Page:** Hero, Pricing Cards (AI, Cyber, Web3), Testimonials, Coming Soon Certificate section. |
| `pricing/page.tsx` | Detailed pricing/payment selection logic (if separated from index). |
| `cyber-awakening/page.tsx` | **Cyber Awakening Page:** Outreach programs, Past/Upcoming events, Registration form. |

---
4.2. `(auth)/` Route Group Details

| File/Folder | Description |
| :--- | :--- |
| `login/page.tsx` | Supabase email/password login/signup. |
| `verify/page.tsx` | Page to handle email verification link redirects. |

---
4.3. `(dashboard)/` Route Group Details (Protected Routes)

Requires Supabase authentication checks.

| Path | Description | Requirements Met |
| :--- | :--- | :--- |
| `layout.tsx` | Dashboard specific layout (navigation sidebar/header). | Access Control |
| `/` | **Default Dashboard View:** Shows student progress (Goal, Paid, History, Subscription Status). | Save & Enroll Dashboard |
| `/admin` | **Admin Panel:** Role-based access required. | Admin Panel |
| `/admin/users` | Manage users (Admin role). | Admin Panel |
| `/admin/payments` | Manage payments ledger (Admin role). | Admin Panel |
| `/admin/content` | Manage programs/courses (Admin role). | Program Management |
| `/admin/testimonials` | Manage displayed testimonials (Admin role). | Testimonials Management |

---
4.4. `api/` Route Handlers

| Path | Method | Description |
| :--- | :--- | :--- |
| `paystack/webhook/route.ts` | POST | **Receives Paystack webhooks.** Verifies signature and updates Supabase transaction/user records securely via Edge Function invocation or direct DB write (if suitable security model is in place). |
| `certificate/download/[id]/route.ts` | GET | Generates and serves the downloadable certificate file (PDF/Image). |

5. `src/components/` DIRECTORY STRUCTURE

| Folder/File | Description |
| :--- | :--- |
| `layout/` | Components for structure: `Header.tsx`, `Footer.tsx`, `DashboardNav.tsx`. |
| `marketing/` | Components specific to the public site: `HeroSection.tsx`, `PricingCard.tsx`, `TestimonialCard.tsx`. |
| `dashboard/` | Components specific to the student view: `ProgressBar.tsx`, `PaymentHistoryTable.tsx`, `SubscriptionStatusBadge.tsx`. |
| `admin/` | Components for the Admin Panel: `UserManagementTable.tsx`, `ProgramForm.tsx`. |
| `ui/` | Atomic/reusable primitives: `Button.tsx`, `Input.tsx`, `Modal.tsx`. |
| `payment/` | Components handling payment initiation: `PaystackButton.tsx`, `PaymentOptionSelector.tsx`. |

6. `src/lib/` DIRECTORY STRUCTURE

| File | Description |
| :--- | :--- |
| `supabaseClient.ts` | Initialized Supabase client instance (Browser and Server variants). |
| `supabaseServer.ts` | Server-side Supabase client setup (for SSR/Route Handlers). |
| `db/schema.sql` | SQL definitions for Supabase tables (Users, Courses, Payments, Testimonials, Programs). |
| `db/rlsPolicies.sql` | SQL definitions for Row Level Security policies (Critical for data separation). |
| `paystackService.ts` | Utility functions interacting with the Paystack API (e.g., creating transactions if needed, or just verification logic wrappers). |
| `authUtils.ts` | Helpers for managing user sessions and roles (determining admin vs student). |
| `emailService.ts` | Integration point for sending welcome/admission emails upon successful payment. |

7. `src/types/` DIRECTORY STRUCTURE

| File | Description |
| :--- | :--- |
| `database.types.ts` | Generated types from Supabase schema introspection (using `supabase gen types`). |
| `models.ts` | Custom TypeScript interfaces for data structures not covered by DB types (e.g., specific API responses or complex UI state models). |
| `user.ts` | User-related types (e.g., UserProfile, AdminPermissions structure). |

8. DATA MANAGEMENT NOTES

8.1. User Onboarding & Access

*   Successful payment triggers a Supabase database trigger or an Edge Function listener.
*   The system updates the user's status in the `profiles` table (or similar).
*   A welcome/admission email is sent immediately (`emailService.ts`).
*   Content gating logic (in `src/app/(dashboard)/layout.tsx` or specific page components) checks payment status/subscription level before rendering course material. Full payment grants immediate full access; Save & Enroll status grants partial access (scope defined later).

8.2. Row Level Security (RLS)

*   RLS policies must be defined in `supabase/db/rlsPolicies.sql` and applied via migrations.
*   **Key Policies:**
    *   Users can only read/update their own `profiles` and `payments` records unless they are 'admin'.
    *   Admins have full read/write access to Users, Payments, Programs, and Testimonials tables.
    *   Testimonial posting/editing might be restricted to authenticated users or admins only.

8.3. Program Management Fields (Conceptual)

The `Programs` table (managed via Admin Panel) should minimally include:
*   `id`
*   `title` (e.g., AI Security)
*   `description_short`
*   `description_long`
*   `price_one_time`
*   `price_subscription`
*   `content_modules` (JSONB array of module details)
*   `prerequisites`
*   `is_active`
*   `date_created`

8.4. Certificate Download

*   The `certificate_details` will be stored (e.g., as a URL pointing to an S3 bucket object, or metadata for dynamic generation).
*   The `/api/certificate/download/[id]/route.ts` endpoint handles the secured retrieval and serving of the downloadable file/link.

## Database Schema Design
SCHEMADESIGN: Ancientech Academy Database Schema

1. Database Technology: PostgreSQL (via Supabase)

2. Schema Overview: The database is structured around core entities: Users (Students/Admins), Courses (Programs), Payments, Testimonials, and Outreach Programs (Events). Row Level Security (RLS) will be enforced extensively.

3. Table Definitions:

A. users (Auth.users extended via RLS Policies)
Description: Stores primary user information, linked to Supabase Auth. Additional profile data is stored here.
Fields:
  id (UUID, Primary Key, FK to auth.users.id)
  email (Text, Unique)
  full_name (Text, Not Null)
  role (Text, Not Null, Enum: 'student', 'admin') - Determines access levels.
  phone_number (Text)
  created_at (Timestamp with time zone)
  profile_picture_url (Text)

B. courses
Description: Defines the available academic programs/modules offered by the academy.
Fields:
  course_id (UUID, Primary Key)
  title (Text, Not Null, Unique) - e.g., \"AI Security\", \"Cybersecurity\", \"Web3 Security\"
  description (Text)
  price_full (Numeric, Not Null) - Full one-time payment price (e.g., 100.00 USD)
  is_active (Boolean, Default true)
  program_details (Text) - Detailed syllabus/content description.
  landing_page_display (Boolean, Default false) - Controls visibility on the landing page cards.
  created_at (Timestamp with time zone)
  updated_at (Timestamp with time zone)

C. user_enrollments
Description: Links users to the courses they are enrolled in and tracks their progress/payment status for that specific course.
Fields:
  enrollment_id (UUID, Primary Key)
  user_id (UUID, Foreign Key to users.id)
  course_id (UUID, Foreign Key to courses.course_id)
  enrollment_date (Timestamp with time zone, Not Null)
  payment_status (Text, Not Null, Enum: 'fully_paid', 'partially_paid', 'pending')
  access_level (Text, Enum: 'none', 'partial', 'full') - Reflects content access based on payment.
  subscription_status (Text, Default 'none') - Tracks if this enrollment is subscription-based.
  last_activity (Timestamp with time zone)
  UNIQUE (user_id, course_id)

D. payments
Description: Transaction records for all financial activities related to enrollments.
Fields:
  payment_id (UUID, Primary Key)
  user_id (UUID, Foreign Key to users.id)
  enrollment_id (UUID, Foreign Key to user_enrollments.enrollment_id, Nullable if initial payment pre-enrollment)
  amount_paid (Numeric, Not Null)
  currency (Text, Default 'USD')
  transaction_reference (Text, Unique) - Paystack reference ID.
  payment_date (Timestamp with time zone, Not Null)
  payment_method (Text, e.g., 'Paystack')
  status (Text, Not Null, Enum: 'success', 'failed', 'pending_verification')
  payment_type (Text, Enum: 'one_time', 'subscription_initial', 'subscription_renewal')
  is_verification_complete (Boolean, Default false) - Confirmed by Edge Function.

E. testimonials
Description: User testimonials displayed on the landing page.
Fields:
  testimonial_id (UUID, Primary Key)
  user_id (UUID, Foreign Key to users.id, Nullable if added manually by admin)
  content (Text, Not Null)
  author_name (Text, Not Null)
  course_context (UUID, Foreign Key to courses.course_id, Nullable)
  is_approved (Boolean, Default false) - Requires admin approval before display.
  display_order (Integer)
  created_at (Timestamp with time zone)

F. outreach_programs (Events)
Description: Stores details about outreach programs and events (Cyber Awakening Page).
Fields:
  program_id (UUID, Primary Key)
  title (Text, Not Null)
  description (Text)
  location (Text, Not Null)
  start_date (Timestamp with time zone, Not Null)
  end_date (Timestamp with time zone)
  is_upcoming (Boolean, Calculated/Set, aids filtering)
  registration_url (Text, For external forms if needed)
  created_at (Timestamp with time zone)

G. program_registrations
Description: Tracks users registered for specific outreach programs/events.
Fields:
  registration_id (UUID, Primary Key)
  program_id (UUID, Foreign Key to outreach_programs.program_id)
  user_id (UUID, Foreign Key to users.id)
  registration_date (Timestamp with time zone, Not Null)
  status (Text, Enum: 'registered', 'attended', 'cancelled')
  UNIQUE (program_id, user_id)

H. certificates
Description: Stores metadata about issued downloadable certificates.
Fields:
  certificate_id (UUID, Primary Key)
  user_id (UUID, Foreign Key to users.id)
  course_id (UUID, Foreign Key to courses.course_id)
  issue_date (Timestamp with time zone, Not Null)
  certificate_url (Text, Path to the actual downloadable file, likely S3 or Supabase Storage)
  is_active (Boolean, Default true)
  completion_percentage (Numeric) - For tracking partial completion if applicable.

4. Relationships & Business Logic Mapping:

*   **One-to-Many (User to Payments):** A User can have many Payment records.
*   **Many-to-Many (User to Course via Enrollment):** Managed by `user_enrollments`. This is critical for tracking progress per course.
*   **Payment Goal Tracking (Dashboard):** Calculated dynamically using `SUM(amount_paid)` from `payments` table where `user_id` matches the logged-in user, filtered by success status and relevant enrollment context.
*   **Access Control (Non-Functional Requirement):** Content access is gated by `user_enrollments.access_level`. Edge Functions must verify successful payment status in the `payments` table before granting access validation tokens or serving restricted content paths.
*   **Admin Permissions:** `users.role = 'admin'` grants permissions to R/W/U on `users`, `payments`, `testimonials`, `courses`, and `outreach_programs`. Students (`users.role = 'student'`) can only view their own records and others' public profiles/testimonials (as per admin edit permission detail).

5. Row Level Security (RLS) Strategy Highlights:

*   **users:** Only accessible directly by the user themselves (matching `auth.uid()` to `users.id`). Admins can view all user profiles.
*   **payments:** Users can only see their own payment history (`user_id` matches `auth.uid()`). Admins see all payments.
*   **user_enrollments:** Users see their own enrollments. Admins see all.
*   **certificates:** Users can download their own certificates. Admins can generate/view all.
*   **Data Retention:** If data deletion requests are received, records in `payments`, `user_enrollments`, and potentially masking data in `users` (anonymizing PII) would be required, governed by specific RLS/DB triggers upon user account deletion initiated via Auth hooks or admin action.

6. Edge Function Interaction (Paystack Verification):

*   Edge Functions will use Supabase secrets to securely interact with the Paystack Webhook secret.
*   Upon receiving a valid Paystack notification for a transaction reference, the function updates the corresponding record in the `payments` table (`status` to 'success', `is_verification_complete` to true) and triggers updates in `user_enrollments` (e.g., setting `access_level` to 'partial' or 'full', and triggering the student welcome email via Auth Hooks or the function itself).

7. Pricing Structure Implementation:

*   The $100 price point for each course is stored in `courses.price_full`.
*   **Full Payment:** Results in one entry in `payments` matching `courses.price_full`, setting `user_enrollments.access_level` to 'full'.
*   **Save & Enroll (Partial Payment):** Results in an initial payment entry in `payments` (amount agreed upon later), setting `user_enrollments.access_level` to 'partial'. This triggers the required admission/email flow based on the partially paid status.

## User Flow
USERFLOW DOCUMENT: ANCIENTECH ACADEMY

VERSION: 1.0
DATE: 2024-05-10
PROJECT: Ancientech Academy Website

---

## 1. OVERVIEW AND OBJECTIVES

This document details the critical user flows required for the Ancientech Academy production website, focusing on enrollment, payment processing, dashboard access, and administrative management. The primary goal is to ensure a secure, intuitive, and compliant experience for prospective students and administrators, leveraging Next.js, Supabase, and Paystack.

---

## 2. USER FLOWS

### 2.1. U01: Prospective Student Landing Page Exploration & Enrollment Decision

**Goal:** User lands on the site, reviews offerings, selects a course/payment option, and proceeds to enrollment.

**Actors:** Prospective Student (Unauthenticated User)

| Step | Action/Interaction | System Response/Screen Description | Next Step |
| :--- | :--- | :--- | :--- |
| 1.1 | User navigates to Homepage (https://...) | Landing Page loads. Displays Hero Section (Branding based on CyberPlural aesthetic, academy focus). | 1.2 |
| 1.2 | User scrolls to Pricing Section | Displays 3 Course Cards: AI Security ($100), Cybersecurity ($100), Web3 Security ($100). | 1.3 |
| 1.3 | User selects a Course Card (e.g., Cybersecurity) | Card highlights. Option selection appears below for Payment Type: [One-Time Full Payment] OR [Save & Enroll (50% deposit)]. | 1.4 |
| 1.4 | User selects Payment Type (e.g., Save & Enroll) | Button CTA changes to "Proceed to Save & Enroll" or "Proceed to Full Payment." | 1.5 |
| 1.5 | User clicks CTA | Redirects to /save-enroll or /enrollment gateway. Requires Email/Password setup or existing login. | 2.1 (U02) |
| 1.6 | User views Testimonials/Certificate Sections | Testimonials are displayed. Certificate section displays "Coming Soon." | End (Return to exploration) |

---

### 2.2. U02: User Onboarding and Secure Payment Processing (Authentication & Paystack Integration)

**Goal:** New or existing student successfully authenticates, completes payment, and gains initial dashboard access.

**Actors:** Student (New or Existing User)

| Step | Action/Interaction | System Response/Screen Description | Next Step |
| :--- | :--- | :--- | :--- |
| 2.1 | User reaches Authentication Gate (from U01.5) | Supabase Auth modal appears: Sign Up / Log In (Email/Password). | 2.2 |
| 2.2 | User successfully authenticates (or signs up) | User is temporarily redirected to the Payment Intent handler (Pre-Dashboard state). | 2.3 |
| 2.3 | System verifies payment selection (e.g., $50 for Save & Enroll) | System generates a unique Payment Intent Reference linked to the User ID in Supabase. | 2.4 |
| 2.4 | System redirects to Paystack Integration Page | Paystack iframe/modal embedded. Displays amount, course, and initiates payment flow (e.g., card entry). | 2.5 |
| 2.5 | User completes payment on Paystack | Paystack notifies the backend (via Webhook, processed by Supabase Edge Function). | 2.6 |
| 2.6 | Edge Function Verification | Edge Function verifies transaction signature, updates `payments` table in Supabase, sets user access status based on payment criteria (e.g., half paid = enrolled in introductory material; full paid = full access). | 2.7 |
| 2.7 | Successful Verification Redirect | User is redirected to their `/dashboard`. A success notification flashes. Enrollment email (including class allocation) is triggered via Edge Function. | 3.1 (U03) |
| **Failure Path** | Payment fails or is abandoned mid-flow. | User sees error message and remains on the payment page, retaining the generated Payment Intent Reference for later completion. | End |

---

### 2.3. U03: Student Dashboard Management

**Goal:** Student monitors progress, views history, and handles any outstanding balance.

**Actors:** Authenticated Student (Access granted via RLS post-payment)

| Step | Action/Interaction | System Response/Screen Description | Next Step |
| :--- | :--- | :--- | :--- |
| 3.1 | User navigates to `/dashboard` | Dashboard loads, restricted by RLS. Displays personalized metrics: | 3.2 |
| 3.2 | Dashboard Data Display | - **Course Enrolled:** (e.g., Cybersecurity)
- **Total Goal Amount:** ($100)
- **Amount Paid:** ($50)
- **Progress Bar:** (50% complete)
- **Subscription Status:** (Active/Pending/Inactive)
- **Remaining Balance:** ($50)
- **Payment History:** Table listing dates, amounts, and status. | 3.3 |
| 3.3 | User needs to complete payment (if on "Save & Enroll") | CTA: "Make Remaining Payment" | 3.4 |
| 3.4 | User clicks "Make Remaining Payment" | Redirected back to the Paystack integration flow (similar to U02.4), referencing existing enrollment record. | 2.7 (U02) |
| 3.5 | User attempts to view another student's dashboard (e.g., /dashboard/student_id_234) | RLS policy rejects the request. System displays "Access Denied." (Admin/Student role check applied). | End |
| 3.6 | User requests Certificate Download | If criteria met (e.g., 100% paid), a link/button appears to download the certificate file (generated/stored via backend or directly served upon verification). | End |

---

### 2.4. U04: Administrative Content Management

**Goal:** Administrator manages site content, users, and payment records securely.

**Actors:** Authenticated Administrator (Admin Role)

| Step | Action/Interaction | System Response/Screen Description | Next Step |
| :--- | :--- | :--- | :--- |
| 4.1 | Admin logs in and navigates to `/admin` | Admin Panel loads. Navigation: Users, Payments, Testimonials, Programs. Access restricted by RLS/Auth check. | 4.2 |
| 4.2 | Admin selects "Manage Programs" | List view of all active/inactive programs (AI Security, CyberSec, Web3 Sec). Includes fields for Title, Price (One-Time), Deposit Rate, Description, etc. | 4.3 |
| 4.3 | Admin clicks "Edit" on a Program (e.g., AI Security) | Edit Form appears, allowing modification of all necessary fields (Title, pricing components, descriptions, required payment thresholds). **This update reflects on the Landing Page immediately.** | 4.4 |
| 4.4 | Admin selects "Manage Users" | List of all registered users. Search/Filter available. | 4.5 |
| 4.5 | Admin views a Student Profile (e.g., User ID 123) | Displays all associated data: contact info, enrollment status, payment history. **Admin can view ANY student page/data.** | 4.6 |
| 4.6 | Admin selects "Manage Payments" | Comprehensive ledger of all Paystack transactions verified via Edge Functions. Can manually mark certain entries if necessary (though primary system relies on Paystack). | 4.7 |
| 4.7 | Admin manages Testimonials | CRUD interface to add, edit, or approve testimonials that appear on the Landing Page. | End |

---

### 2.5. U05: Cyber Awakening Outreach Program Management

**Goal:** User views outreach information; Admin manages event listings and registrations.

**Actors:** Prospective Student (U5.1-5.3) / Administrator (U5.4-5.5)

| Step | Action/Interaction | System Response/Screen Description | Next Step |
| :--- | :--- | :--- | :--- |
| 5.1 | User navigates to `/cyber-awakening` | Page displays descriptive text about outreach in Nigeria, section for Past Events, and section for Upcoming Events. | 5.2 |
| 5.2 | User views Upcoming Events section | List of future outreach programs with dates, location, and brief description. | 5.3 |
| 5.3 | User clicks "Register for Event X" | Simple registration form appears (Name, Email, Phone, Affiliation/University). Form submission triggers data storage. | End |
| 5.4 | Admin navigates to Admin Panel -> Programs/Events | Admin sees listing of outreach events. | 5.5 |
| 5.5 | Admin creates new Upcoming Event | Admin inputs all necessary fields: Event Title, Date/Time, Location Details, Description, Capacity Limit. | End |

---

## 3. INTERACTION PATTERNS AND DATA FLOW NOTES

### 3.1. Payment Verification Security (NFR)

*   All critical payment verification (success/failure callbacks) must be handled exclusively by **Supabase Edge Functions**.
*   The Next.js frontend *never* directly communicates sensitive payment gateway secrets.
*   Upon successful payment hook from Paystack, the Edge Function must:
    1.  Verify the webhook signature against the stored Paystack Secret Key.
    2.  Update the `payments` table.
    3.  Update the relevant user record in the `users` table (setting enrollment status/progress).
    4.  Trigger an asynchronous email notification (enrollment confirmation/next steps).

### 3.2. Data Access and RLS

*   **Student Access:** RLS policies on the `profiles`, `payments`, and `courses` tables must ensure a student can only read their own records (`user_id = auth.uid()`), except where explicitly allowed by Admin permissions (U03.5 observation).
*   **Admin Access:** Admin role users bypass standard RLS checks on read operations for management tasks (U04). Write operations (editing programs, users) are strictly checked server-side within the Edge Functions or server components.

### 3.3. Content Access Control

*   If a user has only paid the deposit (Save & Enroll), RLS must restrict access to course materials tables/APIs until the payment status equals `FULL_PAID`. The progress bar reflects the deposit paid, but content visibility is blocked until required payment threshold is met.

### 3.4. Certificate Generation

*   When a user achieves 100% payment, the Edge Function updates the user status to `CERTIFICATE_ELIGIBLE`.
*   The Student Dashboard (U03.6) displays the download link. Upon click, the backend fetches the previously stored certificate file (or generates it dynamically if required) and serves it securely to the user.

---
END OF USER FLOW DOCUMENT

## Styling Guidelines
ANCIENTECH ACADEMY: STYLING GUIDELINES DOCUMENT

Version: 1.0
Date: October 26, 2023

---

## 1. Introduction and Design Philosophy

The visual identity of Ancientech Academy must convey trust, cutting-edge technology, and academic rigor, drawing inspiration from modern cybersecurity aesthetics while maintaining an authoritative feel, similar to the high-tech professionalism of cyberplural.com.

Our core design philosophy centers on **"Secure Modernity."** We balance dark, secure interfaces associated with cybersecurity with clean, accessible layouts necessary for an educational platform.

**Target Audience Aesthetic:**
*   **Primary (University Students):** Modern, high-contrast, engaging, and fast-loading interfaces.
*   **Secondary (General Public):** Clear, trustworthy, and intuitive navigation.

---

## 2. Color Palette

The palette is built around deep, secure backgrounds contrasted with vibrant, technical accent colors to highlight progress, security status, and calls to action (CTAs).

| Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| Primary Background | Deep Void | #0A0D14 | Main page backgrounds, large panels. Conveys security and depth. |
| Secondary Background | Dark Slate | #181A20 | Card backgrounds, component containers, navigation bars. |
| Primary Accent | Electric Teal | #00E699 | Primary CTAs (Enroll Now, Submit), progress indicators, active states. Represents technology and clarity. |
| Secondary Accent | Cyber Violet | #8A2BE2 | Highlights important announcements, "Save & Enroll" features, and educational content emphasis. |
| Text - Primary | Bright White | #FFFFFF | Main body copy, headings. |
| Text - Secondary | Light Gray | #AAAAAA | Subtitles, metadata, disabled states. |
| Status/Alerts (Danger) | Crimson Red | #FF4136 | Errors, payment failures, alerts. |
| Status/Alerts (Success) | Success Green | #2ECC71 | Successful transactions, successful logins. |

---

## 3. Typography

Typography must be highly legible on dark backgrounds and convey a modern, technical feel. We prioritize sans-serif fonts for clarity across all screen sizes.

**Font Family:** Inter (Primary Font) or a close, system-safe equivalent (e.g., Roboto on Android/Chrome, San Francisco on iOS/macOS).

| Element | Font Size (Desktop) | Font Weight | Line Height | Usage Context |
| :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero Title)** | 4.5rem (72px) | Bold (700) | 1.1 | Main headlines; impactful and large. |
| **H2 (Section Titles)** | 2.5rem (40px) | Semi-Bold (600) | 1.2 | Key section headers (e.g., Pricing, Testimonials). |
| **H3 (Card/Subheadings)** | 1.5rem (24px) | Medium (500) | 1.3 | Pricing card titles, testimonial attribution. |
| **Body Copy** | 1.125rem (18px) | Regular (400) | 1.6 | Main descriptive text. |
| **Captions/Metadata** | 0.875rem (14px) | Regular (400) | 1.5 | Descriptions under progress bars, payment history details. |
| **Buttons/CTAs** | 1rem (16px) | Semi-Bold (600) | 1.0 | High visibility action text. |

**Styling Note:** Text alignment should generally be left-aligned, except for major headings in specific hero sections which may be center-aligned for visual balance.

---

## 4. Iconography

Icons should be modern, linear (line-art style), and utilize the **Electric Teal** accent color on hover or active states.

*   **Source:** Standardized library (e.g., Lucide Icons or similar clean SVG set).
*   **Usage:** Used consistently for features lists, dashboard navigation, and payment method representations.

---

## 5. UI Components and Layout Principles

### 5.1 Layout Grid

*   Utilize a responsive 12-column grid system (Bootstrap/Tailwind standard).
*   Maintain generous horizontal padding (2rem minimum on large screens) to ensure content breathes against the dark background.

### 5.2 Buttons and CTAs

Buttons must clearly differentiate action types:

1.  **Primary (Enroll/Pay):** Filled with **Electric Teal** background, White text. On hover, slightly darken the Teal or add a subtle glow effect.
2.  **Secondary (View Details/Learn More):** Ghost button style. Teal border, transparent background, Teal text.
3.  **Destructive (Admin Actions):** Subtle Red borders/text.

### 5.3 Forms and Inputs

Inputs (used heavily on Save & Enroll and Cyber Awakening registration) should align with the secure aesthetic:

*   **Background:** Slightly lighter than the main background (#181A20).
*   **Borders:** Thin 1px border in **Light Gray**.
*   **Focus State:** When focused, the border should shift to **Electric Teal**.
*   **Labels:** Placed above the input field, styled in **Text - Secondary** color, moving to **Electric Teal** upon focus.

### 5.4 Data Visualization (Progress Bars)

The dashboard requires prominent progress visualization:

*   **Track/Background:** Dark Slate (#181A20).
*   **Fill:** **Electric Teal**. The fill animation must be smooth upon loading/payment update.
*   **Labeling:** The percentage complete (or remaining amount) must be clearly displayed using **Body Copy** text directly over or immediately next to the bar.

### 5.5 Pricing Cards

Pricing cards must clearly differentiate the three tiers (AI, Cyber, Web3) and the payment options (One-Time vs. Subscription).

*   **Card Container:** Dark Slate (#181A20) with a subtle, thin **Electric Teal** border indicating interactivity or selection.
*   **Emphasis:** The selected or most recommended pricing structure (if applicable) should utilize a subtle outer glow effect using the **Cyber Violet**.
*   **Payment Toggle:** The one-time/subscription toggle must use clear visual segmentation (segmented control) styled with Teal accents.

---

## 6. Dashboard and Admin Panel Styling

The internal application (Dashboard and Admin Panel) employs a stricter, more functional styling approach while adhering to the color scheme.

### 6.1 Navigation

*   **Sidebar Navigation:** Fixed position, utilizing Deep Void background. Active link highlighted with a vertical bar of **Electric Teal** on the left edge.
*   **Admin Specifics:** Admin elements (e.g., management tables) should use subtle alternating row colors (Deep Void and slightly darker background) for improved readability in complex data sets.

### 6.2 Access Restriction Visualization

Where content is locked pending payment:

*   Content blocks should be overlaid with a semi-transparent dark mask (using RGBA black).
*   A prominent lock icon (Electric Teal) and text explaining the payment requirement (e.g., "Access requires 50% payment or Full Enrollment") must be centered over the obscured content.

---

## 7. Animation and Micro-interactions

Animations should be swift, purposeful, and minimal to maintain performance (essential for Next.js optimization).

1.  **Hover Effects:** Subtle scale (1.02x) or shadow changes on interactive elements (buttons, cards).
2.  **Loading States:** Use subtle pulsing animations for loading spinners, colored Electric Teal.
3.  **Transitions:** Use smooth opacity and transform transitions (under 300ms) for page loads and modal appearances, reinforcing the feeling of a modern, responsive application.

---

## 8. Data Retention and Privacy Visual Cues

Given the security focus, visual trust indicators are crucial, especially during authentication and payment flows.

*   **Security Badges:** Incorporate small, static lock or shield icons (Teal) near authentication forms and payment modals, reinforcing the use of Supabase RLS and Edge Function verification.
*   **Privacy Policy Link:** Always visible in the footer of authenticated areas, using standard **Text - Secondary** color.
