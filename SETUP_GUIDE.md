# 🚀 Complete Setup & Development Guide

This guide will walk you through setting up and developing the Metricalgo landing page from scratch.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Development Workflow](#development-workflow)
3. [Customization Guide](#customization-guide)
4. [Deployment](#deployment)
5. [Best Practices](#best-practices)

---

## Initial Setup

### Step 1: Install Dependencies

```bash
# Navigate to project directory
cd /mnt/c/Users/jekyt/Desktop/Printer\ Config/Others/Git/metricalgo_discover

# Install all dependencies
npm install
```

**What gets installed:**
- Nuxt 4 - Framework
- Vue 3 - UI library
- Tailwind CSS - Styling
- TypeScript - Type safety

**Expected output:**
```
added 500+ packages in 30s
```

### Step 2: Start Development Server

```bash
npm run dev
```

**What happens:**
- Nuxt compiles your application
- Server starts at `http://localhost:3000`
- Hot module replacement (HMR) is enabled
- Changes auto-refresh the browser

**Expected output:**
```
Nuxt 3.13.2 with Nitro 2.9.7
  > Local:    http://localhost:3000/
  > Network:  http://192.168.1.X:3000/

ℹ Vite client warmed up in 1234ms
✔ Nuxt is ready in 2s
```

### Step 3: Open in Browser

Visit `http://localhost:3000/metricalgo_discover/`

**What you should see:**
- Hero section with animated gradient background
- Feature cards in a grid
- Analytics section with placeholder charts
- Testimonials
- Final CTA section

---

## Development Workflow

### Making Changes

#### Editing Content

**To change the hero headline:**

1. Open `components/HeroSection.vue`
2. Find line ~34 (the `<h1>` tag)
3. Edit the text:

```vue
<h1 class="text-hero-mobile md:text-hero font-display font-bold text-white mb-6 text-balance">
  Your New Headline with
  <span class="gradient-text">AI-Powered</span>
  Analytics
</h1>
```

4. Save - the page auto-refreshes

**To add/edit features:**

1. Open `components/FeaturesSection.vue`
2. Scroll to the `features` array (line ~100+)
3. Add a new feature:

```js
const features = [
  // ... existing features
  {
    icon: YourIcon,
    title: 'New Feature',
    description: 'Description of your new feature.',
    link: '#new-feature'
  }
]
```

#### Editing Styles

**To change the accent color:**

1. Open `tailwind.config.js`
2. Find the `accent` color definition:

```js
accent: {
  400: '#3FC5F0', // Change this hex value
  // ...
}
```

3. Save - Tailwind recompiles automatically

**To add custom CSS:**

1. Open `assets/css/main.css`
2. Add to the `@layer components` or `@layer utilities`:

```css
@layer components {
  .my-custom-button {
    @apply px-8 py-4 bg-accent-400 rounded-full;
  }
}
```

### Project Structure Deep Dive

```
metricalgo_discover/
│
├── app.vue                          # Root component - wraps everything
│   └── Uses: NuxtLayout, NuxtPage
│
├── nuxt.config.ts                   # Configuration file
│   ├── App settings (baseURL, meta tags)
│   ├── Module configuration
│   └── Build settings
│
├── tailwind.config.js               # Design system
│   ├── Color palette
│   ├── Typography scale
│   └── Custom animations
│
├── assets/css/main.css             # Global styles
│   ├── Tailwind imports
│   ├── Custom components (.btn, .card, etc.)
│   └── Utility classes
│
├── layouts/
│   └── default.vue                 # Page wrapper
│       ├── AppHeader
│       ├── <slot> (page content goes here)
│       └── AppFooter
│
├── components/
│   ├── AppHeader.vue               # Navigation & logo
│   ├── AppFooter.vue               # Footer links & social
│   ├── HeroSection.vue             # Above-the-fold content
│   ├── FeaturesSection.vue         # Feature grid
│   ├── AnalyticsSection.vue        # Data visualization showcase
│   ├── TestimonialsSection.vue     # User reviews
│   └── CTASection.vue              # Final call-to-action
│
└── pages/
    └── index.vue                   # Landing page (composes all sections)
```

---

## Customization Guide

### 1. Adding Your Own Images

**For the hero section:**

```bash
# 1. Create a public/images folder
mkdir -p public/images

# 2. Add your image (hero-bg.jpg)
# Copy your image to public/images/hero-bg.jpg

# 3. Edit components/HeroSection.vue
```

Replace the placeholder div (line ~120) with:

```vue
<img
  src="/metricalgo_discover/images/hero-bg.jpg"
  alt="Trading dashboard"
  class="w-full h-full object-cover rounded-2xl"
/>
```

**Important:** Include the base URL `/metricalgo_discover/` in image paths for GitHub Pages.

### 2. Adding Video Content

```vue
<!-- In components/HeroSection.vue -->
<video
  autoplay
  muted
  loop
  playsinline
  class="w-full h-full object-cover rounded-2xl"
>
  <source src="/metricalgo_discover/videos/demo.mp4" type="video/mp4">
  Your browser does not support video.
</video>
```

**Video best practices:**
- Keep under 5MB
- Use MP4 (H.264 codec)
- Resolution: 1920x1080 or lower
- Include `playsinline` for iOS

### 3. Changing Typography

**Add a new Google Font:**

1. Edit `nuxt.config.ts`:

```ts
link: [
  // ... existing links
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap'
  }
]
```

2. Update `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
},
```

### 4. Adding New Sections

**Example: Adding a pricing section**

1. Create `components/PricingSection.vue`:

```vue
<template>
  <section id="pricing" class="section bg-primary-950">
    <div class="container-custom">
      <h2 class="text-4xl md:text-5xl font-display font-bold text-white text-center mb-12">
        Simple, Transparent <span class="gradient-text">Pricing</span>
      </h2>

      <!-- Pricing cards here -->
    </div>
  </section>
</template>

<script setup lang="ts">
// Pricing logic
</script>
```

2. Add to `pages/index.vue`:

```vue
<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <AnalyticsSection />
    <PricingSection />        <!-- Add this line -->
    <TestimonialsSection />
    <CTASection />
  </div>
</template>
```

### 5. Customizing Animations

**Change animation speed:**

Edit `tailwind.config.js`:

```js
animation: {
  'fade-in': 'fadeIn 0.3s ease-in-out',  // Changed from 0.5s
  'slide-up': 'slideUp 0.4s ease-out',   // Changed from 0.6s
},
```

**Add new animation:**

```js
animation: {
  'bounce-slow': 'bounce 3s infinite',
},
```

Use in components:

```vue
<div class="animate-bounce-slow">
  <!-- Content -->
</div>
```

---

## Deployment

### GitHub Pages Deployment

**Prerequisites:**
- GitHub repository created
- Code pushed to `main` branch

**Setup Steps:**

1. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages (left sidebar)
   - Source: "GitHub Actions"
   - Save

2. **Push your code:**

```bash
git add .
git commit -m "Initial landing page setup"
git push origin main
```

3. **Monitor deployment:**
   - Go to Actions tab in GitHub
   - Watch the "Deploy to GitHub Pages" workflow
   - Wait for green checkmark

4. **Access your site:**
   - Visit `https://[your-username].github.io/metricalgo_discover/`

**Deployment workflow file:** `.github/workflows/deploy.yml`

### Custom Server Deployment

**Option 1: Static file server**

```bash
# Build the site
npm run generate

# Output is in .output/public/
# Upload this directory to your server
```

**Option 2: Using Nginx**

```bash
# On your server
sudo apt update
sudo apt install nginx

# Copy files
scp -r .output/public/* user@server:/var/www/metricalgo/

# Configure nginx
sudo nano /etc/nginx/sites-available/metricalgo
```

Nginx config:

```nginx
server {
    listen 80;
    server_name metricalgo.com;
    root /var/www/metricalgo;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

**Option 3: Using Docker**

Create `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY .output/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
npm run generate
docker build -t metricalgo-landing .
docker run -d -p 80:80 metricalgo-landing
```

---

## Best Practices

### Performance Optimization

**1. Image Optimization**

```bash
# Install image optimizer
npm install -D @nuxt/image

# Add to nuxt.config.ts
modules: ['@nuxt/image']

# Use in components
<NuxtImg src="/images/hero.jpg" alt="Hero" width="1200" height="800" />
```

**2. Lazy Loading**

```vue
<!-- Components below the fold -->
<ClientOnly>
  <TestimonialsSection />
</ClientOnly>
```

**3. Font Loading**

Already optimized with `display=swap` in the Google Fonts link.

### SEO Best Practices

**1. Meta Tags**

Each page should have unique meta tags. Edit in `pages/index.vue`:

```vue
<script setup lang="ts">
useHead({
  title: 'Metricalgo - Your Trading Companion',
  meta: [
    { name: 'description', content: 'Your unique description here' },
    { property: 'og:image', content: '/metricalgo_discover/og-image.jpg' },
  ]
})
</script>
```

**2. Semantic HTML**

Use proper heading hierarchy:

```vue
<!-- Good -->
<h1>Main Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection</h3>

<!-- Bad -->
<h1>Main Title</h1>
  <h3>Section Title</h3>  <!-- Skipped h2 -->
```

**3. Alt Text**

Always provide descriptive alt text:

```vue
<!-- Good -->
<img src="chart.png" alt="Bitcoin price chart showing 24% gain over 30 days" />

<!-- Bad -->
<img src="chart.png" alt="chart" />
```

### Accessibility

**1. Color Contrast**

Test your color combinations: https://contrast-ratio.com/

Current palette meets WCAG AA standards:
- White text on `primary-900` background: 14.5:1 ✓
- `accent-400` on `primary-900`: 4.8:1 ✓

**2. Keyboard Navigation**

Test by pressing Tab key - all interactive elements should be focusable.

**3. ARIA Labels**

Add for icon-only buttons:

```vue
<button aria-label="Close menu">
  <svg><!-- X icon --></svg>
</button>
```

### Code Organization

**1. Component Size**

Keep components under 300 lines. If larger, split into sub-components.

**2. Naming Conventions**

- Components: PascalCase (`HeroSection.vue`)
- Files: kebab-case or PascalCase
- CSS classes: kebab-case
- Variables: camelCase

**3. Comments**

Add comments for complex logic:

```vue
<script setup lang="ts">
// Track user's scroll position to trigger animations
const scrollY = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
</script>
```

---

## Troubleshooting

### Common Issues

**Issue: "Cannot find module 'nuxt'"**

```bash
# Solution: Reinstall dependencies
rm -rf node_modules
npm install
```

**Issue: Styles not applying**

1. Check Tailwind content paths in `tailwind.config.js`
2. Ensure `main.css` is created in `assets/css/`
3. Restart dev server

**Issue: 404 on GitHub Pages**

1. Verify `baseURL` in `nuxt.config.ts` matches repo name
2. Check GitHub Pages source is set to "GitHub Actions"
3. Review deployment logs in Actions tab

**Issue: Images not loading in production**

Use absolute paths with base URL:

```vue
<!-- Correct -->
<img src="/metricalgo_discover/images/hero.jpg" />

<!-- Wrong -->
<img src="../images/hero.jpg" />
```

### Getting Help

1. Check Nuxt documentation: https://nuxt.com/docs
2. Search GitHub issues
3. Join Nuxt Discord community
4. Stack Overflow with `[nuxt]` tag

---

## Next Steps

Now that your landing page is set up:

1. **Replace placeholder content** with real copy
2. **Add your images/videos** to the hero and analytics sections
3. **Customize colors** to match your brand
4. **Test on mobile devices** using Chrome DevTools
5. **Set up analytics** (Plausible or Google Analytics)
6. **Deploy to GitHub Pages**
7. **Share with stakeholders** for feedback
8. **Iterate based on user data**

**Pro tip:** Set up A/B testing early to optimize conversion rates!

---

## Resources

- [Nuxt 4 Docs](https://nuxt.com/docs)
- [Vue 3 Guide](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - Browser support tables

---

**Happy coding! 🎉**

If you encounter any issues or need help, refer back to this guide or check the main README.md.
