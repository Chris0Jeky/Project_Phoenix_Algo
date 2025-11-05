# Metricalgo Discovery - Landing Page

A premium, modern landing page for Metricalgo's trading tools and analytics platform. Built with Nuxt 4, Vue 3, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Build for Production

```bash
# Generate static site
npm run generate

# Preview production build
npm run preview
```

## 📁 Project Structure

```
metricalgo_discover/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── app.vue                     # Root application component
├── assets/
│   └── css/
│       └── main.css           # Global styles & Tailwind imports
├── components/
│   ├── AppHeader.vue          # Site header with navigation
│   ├── AppFooter.vue          # Site footer
│   ├── HeroSection.vue        # Hero/above-the-fold section
│   ├── FeaturesSection.vue    # Features grid
│   ├── AnalyticsSection.vue   # Analytics & data viz showcase
│   ├── TestimonialsSection.vue # User testimonials
│   └── CTASection.vue         # Final call-to-action
├── layouts/
│   └── default.vue            # Default layout wrapper
├── pages/
│   └── index.vue              # Landing page
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies & scripts
```

## 🎨 Design System

### Color Palette

The site uses a carefully selected color palette optimized for trust and professionalism:

- **Primary (Deep Navy)**: `#0E1E2E` - Main brand color, conveys trust
- **Secondary (Dark Gray)**: `#1F3A57` - Supporting elements
- **Accent (Turquoise)**: `#3FC5F0` - CTAs and highlights
- **Success (Green)**: `#22c55e` - Positive data, gains
- **Danger (Red)**: `#ef4444` - Negative data, losses

### Typography

- **Display Font**: Plus Jakarta Sans - Used for headings
- **Body Font**: Inter - Used for body text
- Both fonts are loaded from Google Fonts

### Spacing & Layout

- Container max-width: `1280px` (7xl)
- Section padding: `py-20 md:py-32`
- Consistent use of Tailwind's spacing scale

## 🛠 Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Framework | Nuxt 4 | Vue-based SSG framework |
| UI Library | Vue 3 | Reactive components |
| Styling | Tailwind CSS 3 | Utility-first CSS |
| Deployment | GitHub Pages | Free static hosting |
| CI/CD | GitHub Actions | Automated deployment |

## 📝 Key Features

- ✅ **Static Site Generation** - Fast, SEO-friendly pages
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Theme** - Premium dark color scheme
- ✅ **Smooth Animations** - Subtle fade-ins and transitions
- ✅ **Accessible** - High contrast, semantic HTML
- ✅ **Performance Optimized** - Minimal JavaScript, optimized assets

## 🚢 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup Steps:**

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to `main` branch
4. GitHub Actions will build and deploy automatically

Your site will be available at: `https://[username].github.io/metricalgo_discover/`

### Custom Server

To deploy to your own server:

```bash
# Generate static files
npm run generate

# Copy the .output/public directory to your server
scp -r .output/public/* user@yourserver.com:/var/www/html/
```

Or use Docker:

```bash
# Build static files
npm run generate

# Serve with nginx or any static file server
docker run -d -p 80:80 -v $(pwd)/.output/public:/usr/share/nginx/html nginx
```

## 🎯 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    900: '#0E1E2E', // Change this
  },
  accent: {
    400: '#3FC5F0', // Change this
  }
}
```

### Adding Sections

1. Create a new component in `components/`:

```vue
<template>
  <section class="section">
    <!-- Your content -->
  </section>
</template>
```

2. Import it in `pages/index.vue`:

```vue
<template>
  <div>
    <HeroSection />
    <YourNewSection />
    <!-- ... -->
  </div>
</template>
```

### Updating Content

All content is in the Vue components. Edit the respective component files:

- Hero text: `components/HeroSection.vue`
- Features: `components/FeaturesSection.vue`
- Testimonials: `components/TestimonialsSection.vue`
- etc.

### Adding Images/Videos

1. Place files in `public/` or `assets/images/`
2. Reference them in components:

```vue
<!-- From public/ -->
<img src="/hero-image.jpg" alt="Hero" />

<!-- From assets/ -->
<img src="~/assets/images/hero.jpg" alt="Hero" />
```

## 📊 Analytics & A/B Testing

To add analytics (recommended: Plausible or Simple Analytics):

1. Create `plugins/analytics.js`:

```js
export default defineNuxtPlugin(() => {
  // Add your analytics script
  if (process.client) {
    // Analytics code here
  }
})
```

2. Track custom events:

```js
// In your components
const trackEvent = () => {
  if (window.plausible) {
    window.plausible('CTA Click')
  }
}
```

## 🧪 Best Practices

### Performance

- Keep images under 200KB (use WebP format)
- Lazy-load components below the fold
- Minimize custom JavaScript
- Use Nuxt's built-in image optimization

### SEO

- Use semantic HTML tags
- Add meta descriptions to pages
- Include proper heading hierarchy (h1 → h2 → h3)
- Generate a sitemap (use `@nuxtjs/sitemap` module)

### Accessibility

- Maintain color contrast ratio of at least 4.5:1
- Provide alt text for all images
- Ensure keyboard navigation works
- Test with screen readers

## 🔧 Advanced Configuration

### Changing Base URL

If deploying to a subdirectory, update `nuxt.config.ts`:

```ts
app: {
  baseURL: '/your-subdirectory/'
}
```

### Adding Google Analytics

Install the module:

```bash
npm install @nuxtjs/google-analytics
```

Configure in `nuxt.config.ts`:

```ts
modules: [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/google-analytics'
],
googleAnalytics: {
  id: 'UA-XXXXXXXXX-X'
}
```

### Environment Variables

Create `.env` file:

```env
NUXT_PUBLIC_API_BASE=https://api.metricalgo.com
```

Use in components:

```js
const config = useRuntimeConfig()
const apiBase = config.public.apiBase
```

## 📚 Resources

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules .nuxt
npm install
```

### Styles Not Loading

- Check that `assets/css/main.css` is imported
- Verify Tailwind config `content` paths are correct
- Run `npm run dev` to see detailed errors

### Deployment Issues

- Ensure GitHub Actions has proper permissions
- Check that `baseURL` matches your deployment path
- Verify the `.output/public` directory is generated

## 📄 License

Copyright © 2025 Metricalgo. All rights reserved.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

---

**Need Help?** Open an issue or contact the development team.

**Live Site:** [https://yoursite.github.io/metricalgo_discover/](https://yoursite.github.io/metricalgo_discover/)
