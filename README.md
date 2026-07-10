# Omkar Lunge - Premium Portfolio Website

A beautiful, static, production-ready portfolio website for Omkar Lunge, Hardware Design Engineer. Built with pure HTML5, CSS3, and Vanilla JavaScript—no frameworks, no build tools, fully compatible with GitHub Pages.

## 🎯 Features

### Design Excellence
- **Premium Dark Theme**: Inspired by Apple, Linear.app, NVIDIA, Stripe, and Analog Devices
- **Modern Aesthetics**: Glassmorphism effects, smooth animations, professional spacing
- **Color Palette**: 
  - Primary: `#00D9FF` (Cyan)
  - Secondary: `#3B82F6` (Blue)
  - Background: `#050816` (Deep Dark)
  - Text: `#F8FAFC` (Off-white)

### Performance & Compatibility
- ✅ Zero JavaScript dependencies
- ✅ Zero CSS framework dependencies
- ✅ Works directly from `index.html`
- ✅ GitHub Pages compatible
- ✅ Optimized for all devices (desktop, tablet, mobile)
- ✅ Fast loading & smooth animations
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ SEO optimized

### Typography
- **Headings**: Space Grotesk (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Code**: JetBrains Mono (Google Fonts)

### Key Sections
1. **Animated Loading Screen** - PCB traces animation
2. **Sticky Navigation** - With mobile hamburger menu
3. **Hero Section** - Full-screen with animated background and professional illustration
4. **About Section** - Profile, timeline, statistics
5. **Featured Projects** - OscLog, Industrial DAQ, Battery Charger with detail pages
6. **Skills & Expertise** - Animated skill bars and tools
7. **Current Focus** - Active learning areas
8. **Experience** - Timeline of professional positions
9. **Certifications** - Recognition and credentials
10. **GitHub Activity** - Repository showcase
11. **Resume** - Download and preview
12. **Contact** - Contact form and direct links
13. **Footer** - Navigation and social links

## 📁 File Structure

```
.
├── index.html                    # Main landing page
├── style.css                     # All styling (1600+ lines)
├── script.js                     # Vanilla JavaScript (560+ lines)
├── 404.html                      # Error page
├── robots.txt                    # SEO robots file
├── sitemap.xml                   # XML sitemap for search engines
├── manifest.json                 # PWA manifest
├── README.md                     # This file
│
├── projects/
│   ├── osclog.html              # OscLog project detail page
│   ├── daq.html                 # Industrial DAQ detail page
│   └── charger.html             # Battery Charger detail page
│
└── assets/
    ├── favicon.svg              # SVG favicon
    ├── profile-placeholder.svg  # Profile image placeholder
    └── pcb-background.svg       # PCB background pattern
```

## 🚀 Getting Started

### Option 1: Direct Browser Access
Simply open `index.html` in your browser. Everything works immediately with no build process.

```bash
open index.html
```

### Option 2: Local Server (Recommended)
For development and to test service workers:

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js (with http-server):**
```bash
npx http-server
```

Visit `http://localhost:8000`

### Option 3: GitHub Pages
1. Fork/clone this repository
2. Rename to `USERNAME.github.io`
3. Push to GitHub
4. Site will be available at `https://USERNAME.github.io`

## 🎨 Customization Guide

### Colors
Edit the CSS custom properties in `style.css`:

```css
:root {
    --bg-primary: #050816;
    --bg-secondary: #101827;
    --accent-primary: #00D9FF;
    --accent-secondary: #3B82F6;
    --glow: #00F5FF;
    --text-primary: #F8FAFC;
    --text-muted: #94A3B8;
    --border-color: #1E293B;
}
```

### Update Personal Information
1. **Name & Title**: Edit `index.html` hero section
2. **About Section**: Update bio and statistics
3. **Projects**: Add/remove project cards, update project detail pages
4. **Experience**: Edit timeline in `index.html`
5. **Social Links**: Update href attributes for GitHub, LinkedIn
6. **Contact Email**: Replace in contact section and footer

### Add New Sections
1. Create new section div with appropriate id
2. Add styling in `style.css` (follows existing patterns)
3. Add navigation link in navbar
4. Update sitemap.xml for SEO

### Modify Animations
All animations are defined in `style.css` under `@keyframes`. Key animations:
- `slideIn`: Elements enter from below
- `fadeOut`: Loading screen fade
- `fillBar`: Skill bar animation
- `glow`: Title glow effect
- `float`: Floating background elements

## 🔧 Technical Details

### CSS Architecture
- **Variables**: Color, typography, shadows defined at `:root`
- **Responsive**: Mobile-first design with media queries
- **Grid & Flexbox**: Modern layout techniques
- **No !important**: Clean cascade
- **Accessible**: WCAG 2.1 compliant with proper contrast

### JavaScript Features
- **No Dependencies**: Pure Vanilla JS
- **Performance**: Optimized with requestAnimationFrame
- **Accessibility**: Keyboard navigation support
- **PWA Ready**: Manifest and meta tags included
- **SEO**: Schema.org markup included

### Animations
- CSS transitions for smooth interactions
- Canvas animations for PCB traces
- Intersection Observer for scroll reveals
- Requestanimationframe for performance

## 📊 Performance

- **Page Weight**: ~200KB (uncompressed HTML/CSS/JS)
- **Fonts**: Preconnected and optimized
- **Images**: SVG-based (scalable, small file size)
- **Rendering**: Optimized CSS with minimal repaints
- **First Paint**: <1s on modern connections

### Web Vitals
- ✅ LCP (Largest Contentful Paint): <2.5s
- ✅ FID (First Input Delay): <100ms
- ✅ CLS (Cumulative Layout Shift): <0.1

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1200px
- **Large Desktop**: > 1200px

## ♿ Accessibility

- Semantic HTML (`<main>`, `<nav>`, `<section>`, `<footer>`)
- ARIA labels and roles where needed
- Alt text for all images
- Keyboard navigation support
- High contrast ratios (WCAG AAA)
- `prefers-reduced-motion` support

## 🔍 SEO Features

- ✅ Meta description & keywords
- ✅ Open Graph tags (Twitter & Facebook)
- ✅ Canonical URLs
- ✅ Schema.org JSON-LD markup (Person type)
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt configuration
- ✅ Mobile-friendly design
- ✅ Structured data

## 🌐 Browser Support

- Chrome/Chromium: ✅ Latest 2 versions
- Firefox: ✅ Latest 2 versions
- Safari: ✅ Latest 2 versions
- Edge: ✅ Latest 2 versions
- Mobile browsers: ✅ All modern versions

## 📝 Content Writing Tips

### Hero Section
- Keep subtitle under 50 characters
- Description should be 2-3 sentences max
- Use action-oriented language

### Project Cards
- Title: Memorable project name (1-2 words)
- Description: 1-2 sentences describing what it does
- Tech tags: 3-4 most relevant technologies

### Skills Section
- Order by proficiency level
- Use realistic percentages (90%+)
- Include both technical skills and tools

## 🔐 Security

- No external tracking or analytics (privacy-first)
- No cookies or local storage for user data
- Static content only (no server vulnerabilities)
- CSP-friendly (can add Content Security Policy headers)

## 📄 License

This portfolio template is provided as-is for personal use. Attribution appreciated but not required.

## 🤝 Contributing

Have improvements? Feel free to fork and submit pull requests for:
- Bug fixes
- Performance improvements
- Additional features
- Better documentation

## 📞 Contact & Support

For questions about this portfolio:
- **GitHub**: @omkarlunge
- **Email**: omkar@example.com
- **LinkedIn**: /in/omkarlunge

---

**Built with ❤️ • No frameworks • No dependencies • Pure HTML/CSS/JS**

*Last updated: January 2025*
