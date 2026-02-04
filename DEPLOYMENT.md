# Deployment Guide

This guide will walk you through deploying your Comfort Living furniture store website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your local machine

## Step 1: Push Code to GitHub

1. Create a new repository on GitHub

2. Initialize git in your project (if not already done):
```bash
git init
```

3. Add all files:
```bash
git add .
```

4. Commit your changes:
```bash
git commit -m "Initial commit"
```

5. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
```

6. Push to GitHub:
```bash
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Method 1: Using Vercel Dashboard (Recommended for Beginners)

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click "Add New..." → "Project"

3. Import your GitHub repository:
   - Connect your GitHub account if not already connected
   - Select your furniture store repository
   - Click "Import"

4. Configure your project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. Environment Variables (Optional):
   - If you set up EmailJS or other services, add environment variables here
   - Click "Add" for each variable

6. Click "Deploy"

7. Wait for deployment (usually 2-3 minutes)

8. Your site is live! You will get a URL like: `your-project-name.vercel.app`

### Method 2: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? Select your account
   - Link to existing project? No
   - Project name? Enter your desired name
   - Directory? `./`
   - Override settings? No

5. For production deployment:
```bash
vercel --prod
```

## Step 3: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project

2. Click "Settings" → "Domains"

3. Add your custom domain

4. Follow Vercel's instructions to configure DNS:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to your Vercel URL

5. Wait for DNS propagation (can take up to 48 hours)

## Step 4: Configure Environment Variables

If you are using external services (EmailJS, Google Analytics, etc.):

1. In Vercel dashboard, go to your project

2. Click "Settings" → "Environment Variables"

3. Add your variables:
   - Key: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Value: Your EmailJS service ID
   - Environment: Production, Preview, Development

4. Redeploy your site for changes to take effect

## Step 5: Set Up Automatic Deployments

Vercel automatically sets up continuous deployment:

- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment
- Pull requests → Preview deployment with unique URL

## Troubleshooting

### Build Fails

Check the build logs in Vercel dashboard:
- Look for syntax errors
- Check for missing dependencies
- Verify Node.js version compatibility

### Images Not Loading

Ensure image URLs are accessible:
- Pexels images should work out of the box
- For custom images, use Next.js Image optimization
- Check CORS settings if using external image hosts

### Contact Form Not Working

1. Check API route is deployed:
   - Visit `your-domain.com/api/contact`
   - Should return 404 or method not allowed (expected)

2. Check browser console for errors

3. Verify email service integration (if configured)

## Performance Optimization

### Enable Analytics

1. Go to project settings in Vercel

2. Click "Analytics"

3. Enable Vercel Analytics (free tier available)

### Enable Speed Insights

1. Install the package:
```bash
npm install @vercel/speed-insights
```

2. Add to your layout:
```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

3. Redeploy

## Monitoring

### View Deployment Logs

1. Go to your project in Vercel

2. Click "Deployments"

3. Click on any deployment to view logs

### View Analytics

1. Go to your project in Vercel

2. Click "Analytics" to see:
   - Page views
   - Top pages
   - Top referrers
   - Devices and browsers

## Maintenance

### Update Content

1. Edit `data/products.json` locally

2. Commit and push:
```bash
git add .
git commit -m "Update products"
git push
```

3. Vercel automatically deploys changes

### Update Code

Same process as updating content:
1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit and push to trigger deployment

## Rollback

If something goes wrong:

1. Go to "Deployments" in Vercel

2. Find a previous working deployment

3. Click "..." → "Promote to Production"

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

Your furniture store website is now live and ready to accept inquiries!
