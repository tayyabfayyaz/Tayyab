# Vercel Deployment Guide

## Environment Variables Required

Add these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables for **Production**, **Preview**, and **Development**:

### Required Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_USERNAME=Admin
ADMIN_PASSWORD=Admin
```

## How to Get Supabase Keys:

1. **NEXT_PUBLIC_SUPABASE_URL**:
   - Go to Supabase Dashboard → Your Project → Settings → API
   - Copy the "Project URL"

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**:
   - Same location in Supabase
   - Copy the "anon public" key

3. **SUPABASE_SERVICE_ROLE_KEY**:
   - Same location in Supabase
   - Click "Reveal" on the "service_role" key
   - Copy it (keep this secret!)

## Deployment Steps:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Add environment variables (see above)
   - Click "Deploy"

3. **After Deployment**:
   - Your site will be live at `https://your-project.vercel.app`
   - Admin panel: `https://your-project.vercel.app/admin/upload`
   - Login with: Username: `Admin`, Password: `Admin`

## Troubleshooting:

### Build Fails:
- Check that all environment variables are set
- Ensure Node.js version is 18 or higher
- Run `npm run build` locally to test

### Runtime Errors:
- Verify Supabase URL and keys are correct
- Check that the `projects` table exists in Supabase
- Ensure RLS policies are set up correctly

### Admin Panel Not Accessible:
- Make sure you're logged in at `/login`
- Check that `ADMIN_USERNAME` and `ADMIN_PASSWORD` are set

## Commands:

```bash
# Test build locally
npm run build

# Run dev server
npm run dev

# Deploy to Vercel (if Vercel CLI is installed)
vercel --prod
```

## Post-Deployment Checklist:

- [ ] Homepage loads correctly
- [ ] Portfolio page shows projects
- [ ] Project detail pages work
- [ ] Admin panel is accessible
- [ ] Can login to admin panel
- [ ] Can add/edit/delete projects
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive design works

---

**Note**: The build command has been updated from `next build --turbopack` to `next build` because Turbopack is not yet supported in production builds on Vercel.
