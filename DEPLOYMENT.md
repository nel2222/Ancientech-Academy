# Deployment Guide

This guide will help you deploy the Ancientech Academy application to production.

## Prerequisites

- Supabase account
- Paystack account
- Vercel account (or your preferred hosting platform)
- Domain name (optional)

## Step 1: Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Note your project URL and anon key from Settings > API
3. Navigate to SQL Editor and run the schema from `supabase/schema.sql`
4. Enable Email Authentication in Authentication > Providers
5. Configure email templates in Authentication > Email Templates

### Deploy Edge Functions

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Deploy the verify-payment function
supabase functions deploy verify-payment --no-verify-jwt

# Set secrets for the function
supabase secrets set PAYSTACK_SECRET_KEY=your_paystack_secret_key
```

## Step 2: Set Up Paystack

1. Create account at [paystack.com](https://paystack.com)
2. Get your public and secret keys from Settings > API Keys & Webhooks
3. Add webhook URL: `https://your-project.supabase.co/functions/v1/verify-payment`
4. Select event: `charge.success`
5. Test the webhook

## Step 3: Configure Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxx
PAYSTACK_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Step 4: Deploy to Vercel

### Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure environment variables
4. Deploy

### Environment Variables in Vercel

Add all variables from `.env.local`:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
- PAYSTACK_SECRET_KEY
- NEXT_PUBLIC_APP_URL

## Step 5: Create Admin User

After deployment, create your first admin user:

1. Sign up through the normal signup flow
2. Go to Supabase dashboard > Table Editor > profiles
3. Find your user and change role from 'student' to 'admin'

## Step 6: Configure Domain (Optional)

### In Vercel
1. Go to Settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed

### Update Environment Variables
Update `NEXT_PUBLIC_APP_URL` to your custom domain

## Step 7: Testing

Test the following flows:

### Authentication
- [ ] Sign up
- [ ] Sign in
- [ ] Password reset

### Payments
- [ ] Course enrollment
- [ ] Payment processing
- [ ] Dashboard updates
- [ ] Payment history

### Public Pages
- [ ] Landing page loads
- [ ] Pricing section displays courses
- [ ] Testimonials visible
- [ ] Cyber Awakening page

### Security
- [ ] RLS policies work correctly
- [ ] Students can only see their data
- [ ] Admin has elevated permissions
- [ ] Payment verification is secure

## Step 8: Post-Deployment

### Enable Production Mode
1. Switch Paystack to live mode
2. Update keys in environment variables
3. Test with real payment

### Monitoring
1. Enable Vercel Analytics
2. Monitor Supabase logs
3. Set up error tracking (Sentry)

### Backups
1. Configure Supabase automatic backups
2. Export database regularly
3. Version control your code

## Troubleshooting

### Payment Verification Not Working
- Check webhook URL is correct
- Verify Paystack secret key
- Check Edge Function logs in Supabase

### Authentication Issues
- Verify Supabase URL and keys
- Check email configuration
- Review RLS policies

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Delete node_modules: `rm -rf node_modules`
- Reinstall: `npm install`
- Rebuild: `npm run build`

### Database Errors
- Check RLS policies are enabled
- Verify user has correct permissions
- Review Supabase logs

## Performance Optimization

### Image Optimization
- Use Next.js Image component
- Configure image domains in next.config.js

### Caching
- Enable Vercel Edge Cache
- Use SWR for data fetching
- Implement Redis for session storage

### Database
- Add indexes for frequently queried columns
- Use connection pooling
- Monitor query performance

## Security Checklist

- [ ] All API keys are in environment variables
- [ ] RLS policies are enabled on all tables
- [ ] Payment verification uses webhooks
- [ ] HTTPS is enforced
- [ ] CORS is properly configured
- [ ] Rate limiting is in place
- [ ] Input validation on all forms
- [ ] SQL injection prevention
- [ ] XSS protection enabled

## Maintenance

### Regular Tasks
- Monitor error logs weekly
- Review payment reconciliation monthly
- Update dependencies quarterly
- Backup database monthly
- Review security policies quarterly

### Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Support

For deployment issues:
- Check Vercel deployment logs
- Review Supabase function logs
- Contact support@ancientech.academy

## Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Supabase Docs](https://supabase.com/docs)
- [Paystack API Docs](https://paystack.com/docs/api)
- [Vercel Docs](https://vercel.com/docs)
