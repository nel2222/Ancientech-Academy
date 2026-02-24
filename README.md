# Ancientech Academy

A professional cybersecurity education platform built with Next.js, Supabase, and Paystack.

## Features

- **Landing Page**: Hero section, pricing cards for 3 courses (AI Security, Cybersecurity, Web3 Security), testimonials, and certificate section
- **Authentication**: Secure user authentication with Supabase Auth
- **Student Dashboard**: Track payment progress, view payment history, monitor enrollment status
- **Cyber Awakening**: Public outreach program page with event listings and registration
- **Admin Panel**: Manage users, payments, testimonials, and programs (Coming Soon)
- **Payment Integration**: Paystack integration for secure payments
- **Row Level Security**: Supabase RLS policies for data protection

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (PostgreSQL, Auth, RLS, Edge Functions)
- **Payments**: Paystack
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account
- Paystack account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Ancientech Academy"
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase and Paystack credentials

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Paystack Configuration
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Set up Supabase database:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Run the SQL schema from `supabase/schema.sql`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── auth/                # Authentication pages
│   ├── dashboard/           # Student dashboard
│   ├── cyber-awakening/     # Outreach program page
│   ├── admin/               # Admin panel (Coming Soon)
│   └── api/                 # API routes
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components
│   └── sections/            # Page sections
├── lib/                     # Utility functions
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Helper functions
└── types/                   # TypeScript types
    └── database.types.ts    # Database types
```

## Database Schema

The application uses the following main tables:

- **profiles**: User profile information
- **courses**: Course offerings
- **enrollments**: Student enrollments and payment tracking
- **payments**: Payment transaction records
- **testimonials**: Student testimonials
- **outreach_programs**: Cyber Awakening events
- **outreach_registrations**: Event registrations

See `supabase/schema.sql` for the complete schema.

## Payment Flow

1. User selects a course and payment type (one-time or subscription)
2. Paystack checkout is initiated from the frontend
3. User completes payment on Paystack
4. Paystack sends webhook to Supabase Edge Function
5. Edge Function verifies payment and updates database
6. User dashboard is updated with payment status

## Security

- All sensitive operations are handled server-side via Supabase Edge Functions
- Row Level Security (RLS) policies protect user data
- Payment verification uses webhook signatures
- API keys are stored securely in environment variables

## Styling Guidelines

The design follows a modern cybersecurity aesthetic with:

- **Primary Background**: Deep Void (#0A0D14)
- **Secondary Background**: Dark Slate (#181A20)
- **Primary Accent**: Electric Teal (#00E699)
- **Secondary Accent**: Cyber Violet (#8A2BE2)
- **Typography**: Inter font family
- **Components**: shadcn/ui with custom styling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted

## Environment Variables

Make sure to set all required environment variables in your production environment:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
- `PAYSTACK_SECRET_KEY`
- `NEXT_PUBLIC_APP_URL`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email info@ancientech.academy or join our community Discord.

## Acknowledgments

- Design inspiration from cyberplural.com
- Icons by Lucide
- UI components by shadcn/ui
