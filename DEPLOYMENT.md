# GitHub Pages Deployment Guide

This guide explains how to deploy your Nuxt 3 static site to GitHub Pages.

## Prerequisites

1. GitHub repository with admin access
2. Node.js 20+ installed locally
3. GitHub Pages enabled in repository settings

## Configuration Overview

### 1. Repository Settings

1. Go to your repository: https://github.com/Chris0Jeky/Project_Phoenix_Algo
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the changes

### 2. Base URL Configuration

The site is configured to deploy at: `https://chris0jeky.github.io/Project_Phoenix_Algo/`

The base URL is set in `nuxt.config.ts`:
```typescript
app: {
  baseURL: '/Project_Phoenix_Algo/',  // Must match your repository name
  buildAssetsDir: 'assets',
}
```

**Important:** If you rename your repository, update the `baseURL` accordingly.

### 3. GitHub Actions Workflow

The deployment is automated via `.github/workflows/deploy.yml`:

- **Trigger**: Pushes to `main` branch or manual workflow dispatch
- **Node Version**: 20.x
- **Build Command**: `npm run generate`
- **Output Directory**: `.output/public/`

## Deployment Process

### Automatic Deployment

1. Make your changes locally
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin main
   ```
3. GitHub Actions will automatically:
   - Install dependencies
   - Build the static site
   - Deploy to GitHub Pages
4. Check the Actions tab for build status: https://github.com/Chris0Jeky/Project_Phoenix_Algo/actions

### Manual Deployment

1. Go to the Actions tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"
4. Wait for the deployment to complete

## Accessing Your Site

Once deployed, your site will be available at:
- **Production URL**: https://chris0jeky.github.io/Project_Phoenix_Algo/

The deployment typically takes 2-5 minutes after pushing to the main branch.

## Local Development

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Access at: http://localhost:3000/Project_Phoenix_Algo/

### Building Locally

```bash
# Generate static site
npm run generate

# Preview the static build
npm run preview
```

## Troubleshooting

### Site Returns 404

**Issue**: GitHub Pages returns 404 for all pages

**Solutions**:
1. Verify GitHub Pages is enabled with "GitHub Actions" as source
2. Check that the workflow completed successfully in the Actions tab
3. Ensure `.nojekyll` file exists in `public/` directory
4. Wait 5-10 minutes for GitHub Pages to propagate changes

### Assets Not Loading

**Issue**: CSS, JS, or images return 404

**Solutions**:
1. Verify `baseURL` in `nuxt.config.ts` matches repository name
2. Clear browser cache and hard refresh (Ctrl+Shift+R)
3. Check that all asset paths use the baseURL

### Build Fails in GitHub Actions

**Issue**: GitHub Actions workflow fails

**Solutions**:
1. Check the Actions tab for error logs
2. Ensure all dependencies are in `package.json` (not just devDependencies)
3. Run `npm ci` locally to verify clean install works
4. Check Node version compatibility (requires Node 20+)

### Images Not Displaying

**Issue**: Images show broken links

**Solutions**:
1. Place images in `public/images/` directory
2. Reference with full path: `/Project_Phoenix_Algo/images/filename.jpg`
3. Avoid relative paths like `../images/`
4. Use the `useRuntimeConfig()` helper for dynamic paths if needed

## Updating Content

### Text Changes

Edit the relevant Vue components in `components/`:
- `HeroSection.vue` - Landing page hero
- `FeaturesSection.vue` - Feature cards
- `AnalyticsSection.vue` - Charts and analytics
- `TestimonialsSection.vue` - User testimonials

### Adding New Pages

1. Create a new file in `pages/` (e.g., `pages/about.vue`)
2. Add the route to prerender list in `nuxt.config.ts`:
   ```typescript
   nitro: {
     prerender: {
       routes: ['/', '/signup', '/login', '/about']  // Add new route
     }
   }
   ```
3. Update navigation in `components/AppHeader.vue` if needed

### Changing the Repository Name

If you rename your GitHub repository:

1. Update `nuxt.config.ts`:
   ```typescript
   app: {
     baseURL: '/NEW_REPO_NAME/',  // Update this
   }
   ```

2. Update any hardcoded image paths in components
3. Commit and push the changes
4. GitHub Pages URL will change to: `https://username.github.io/NEW_REPO_NAME/`

## Custom Domain Setup (Optional)

To use a custom domain (e.g., `www.metricalgo.com`):

1. Add a `CNAME` file in `public/` with your domain:
   ```
   www.metricalgo.com
   ```

2. Update `nuxt.config.ts` to remove the baseURL:
   ```typescript
   app: {
     baseURL: '/',  // Change to root for custom domain
   }
   ```

3. In GitHub repository settings → Pages:
   - Add your custom domain
   - Configure DNS records with your domain provider
   - Enable "Enforce HTTPS"

## Performance Optimization

### Build Size Monitoring

Check build output size after generation:
```bash
npm run generate
ls -lah .output/public/
```

Target metrics:
- HTML files: < 10KB each
- CSS bundle: < 50KB gzipped
- JS bundle: < 200KB gzipped

### Optimization Tips

1. **Images**: Use WebP format, compress before adding
2. **Fonts**: Limit font weights, use `display=swap`
3. **Icons**: Use SVG icons instead of icon fonts
4. **Charts**: Lazy load ApexCharts with `<ClientOnly>`
5. **CSS**: Tailwind automatically purges unused styles

## Security Considerations

1. **No Secrets**: Never commit API keys or secrets
2. **Dependencies**: Keep packages updated with `npm audit`
3. **.env Files**: Use GitHub Secrets for environment variables
4. **CORS**: Configure properly if connecting to APIs

## Rollback Procedure

If a deployment breaks the site:

1. **Via GitHub UI**:
   - Go to Actions tab
   - Find the last successful deployment
   - Click "Re-run all jobs"

2. **Via Git**:
   ```bash
   git revert HEAD
   git push origin main
   ```

## Monitoring

- **Build Status**: https://github.com/Chris0Jeky/Project_Phoenix_Algo/actions
- **Deployment Status**: Check Pages settings for deployment URL
- **Site Health**: Use browser DevTools Network tab to check 404s

## Support

For issues with:
- **Nuxt 3**: https://nuxt.com/docs
- **GitHub Pages**: https://docs.github.com/en/pages
- **GitHub Actions**: https://docs.github.com/en/actions