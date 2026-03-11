# Admin Panel Setup Guide

## 1. Supabase Setup

### Step 1: Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to initialize

### Step 2: Create the Projects Table
1. Go to **SQL Editor** in your Supabase dashboard
2. Copy and paste the contents of `supabase_setup.sql`
3. Click **Run** to execute the SQL

### Step 3: Get API Keys
1. Go to **Settings** → **API**
2. Copy the **Project URL** and **anon/public key**

## 2. Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
ADMIN_USERNAME=Admin
ADMIN_PASSWORD=Admin
```

## 3. Access the Admin Panel

1. Start the dev server: `npm run dev`
2. Navigate to `/login`
3. Login with:
   - **Username:** `Admin`
   - **Password:** `Admin`
4. You'll be redirected to `/admin/upload`

## 4. Upload Projects

Use the admin panel to add projects with:
- Title
- Description
- Image URL
- Tags (comma-separated)
- Project URL (optional)
- Detailed Description
- Features (one per line)
- Tech Stack (comma-separated)

## 5. View Projects

- Visit `/portfolio` to see all projects
- Click on any project card to view details at `/portfolio/[id]`

## Security Notes

⚠️ **Important:** The simple username/password authentication is for demonstration purposes only. For production:
- Use Supabase Auth with proper user management
- Implement role-based access control
- Use environment variables for sensitive data
- Enable proper RLS policies
