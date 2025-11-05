# ⚡ Quick Start Guide - 5 Minutes to Launch

## Step 1: Install Dependencies (2 minutes)

```bash
npm install
```

Wait for packages to install...

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

## Step 3: Open Browser

Visit: **http://localhost:3000/metricalgo_discover/**

You should see your landing page! 🎉

---

## ✏️ Quick Edits

### Change the Main Headline

**File:** `components/HeroSection.vue` (Line 34)

```vue
<h1>
  Your New Headline
  <span class="gradient-text">AI-Powered</span>
  Analytics
</h1>
```

### Change Colors

**File:** `tailwind.config.js` (Lines 13-50)

```js
accent: {
  400: '#YOUR_COLOR', // Main accent color
}
```

### Add Your Logo

1. Put logo in `public/images/logo.png`
2. **File:** `components/AppHeader.vue` (Line 9)

```vue
<img src="/metricalgo_discover/images/logo.png" alt="Logo" class="w-10 h-10" />
```

---

## 🚀 Deploy to GitHub Pages

### One-Time Setup

1. Go to GitHub repo → Settings → Pages
2. Source: **GitHub Actions**
3. Save

### Deploy

```bash
git add .
git commit -m "Launch landing page"
git push origin main
```

Your site will be live at:
**https://[your-username].github.io/metricalgo_discover/**

---

## 📝 Common Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run generate   # Generate static site
npm run preview    # Preview production build
```

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process
killall node

# Or use a different port
PORT=3001 npm run dev
```

**Styles not loading?**
```bash
# Clear cache and restart
rm -rf .nuxt node_modules
npm install
npm run dev
```

**Changes not appearing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check the terminal for errors

---

## 📚 Need More Help?

- Full documentation: `README.md`
- Step-by-step guide: `SETUP_GUIDE.md`
- Nuxt docs: https://nuxt.com/docs

---

**That's it! You're ready to customize your landing page. Happy coding! 🎨**
