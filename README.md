# Sravya Nadipineni - Data Engineer Portfolio

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript. No frameworks required!

## 📁 Project Structure

```
sravya-portfolio-vanilla/
├── index.html          # Main HTML file with all content
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🚀 Features

### Design
- **Modern Tech Aesthetic**: Dark theme with neon purple, cyan, and lime accents
- **Glassmorphism Effects**: Frosted glass cards with backdrop blur
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Fade-in, slide-in, and glow effects

### Interactive Elements
- **Animated Counters**: Statistics that count up when scrolled into view
- **Particle Background**: Animated floating particles in the background
- **Smooth Scrolling**: Smooth navigation between sections
- **Hover Effects**: Interactive cards and buttons with hover states
- **Scroll Reveal**: Elements animate in as you scroll

### Sections
1. **Navigation Bar**: Sticky navbar with smooth scrolling links
2. **Hero Section**: Eye-catching introduction with call-to-action buttons
3. **About Section**: Personal introduction with contact information
4. **Stats Section**: Key metrics with animated counters
5. **Skills Section**: Organized technical skills by category
6. **Experience Section**: Professional work history with achievements
7. **Education Section**: Academic qualifications
8. **Projects Section**: Academic and personal projects
9. **Contact Section**: Multiple ways to get in touch
10. **Footer**: Copyright and additional links

## 📋 How to Use

### 1. **Open Locally**
Simply open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

### 2. **Using a Local Server (Recommended)**
For best performance, use a local server:

**Using Python 3:**
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
# Then visit http://localhost:8000
```

**Using Node.js (http-server):**
```bash
npm install -g http-server
http-server
# Then visit http://localhost:8080
```

**Using Live Server (VS Code Extension):**
- Install "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

### 3. **Deploy Online**
You can deploy this portfolio to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload files to S3 bucket
- **Cloudflare Pages**: Connect your repository

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #a855f7;      /* Purple */
    --secondary: #06b6d4;    /* Cyan */
    --accent: #84cc16;       /* Lime */
    --dark-bg: #0f172a;      /* Dark background */
    /* ... more colors ... */
}
```

### Update Content
Edit `index.html` to:
- Change name and title
- Update skills and experience
- Add new projects
- Modify contact information

### Modify Animations
Edit animation timings and effects in `styles.css`:
```css
@keyframes fadeInUp {
    /* Adjust animation properties */
}
```

### Adjust JavaScript Behavior
Edit `script.js` to:
- Change animation delays
- Modify counter speeds
- Update button actions
- Customize scroll effects

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Images**: The portfolio uses external images via CDN for optimal performance
2. **Caching**: Browser caching is enabled for faster repeat visits
3. **Minification**: CSS and JS can be minified for production
4. **Lazy Loading**: Images load only when needed

## 🔧 Troubleshooting

### Particles not showing?
- Check if JavaScript is enabled in your browser
- Ensure the canvas element is supported
- Try a different browser

### Animations not smooth?
- Disable browser extensions that might interfere
- Check your internet connection
- Try a different browser

### Images not loading?
- Verify internet connection
- Check if CDN URLs are accessible
- Try opening in an incognito/private window

## 📝 Customization Guide

### Add a New Section
1. Add HTML in `index.html`
2. Add CSS styling in `styles.css`
3. Add JavaScript interactivity in `script.js` if needed

### Change Font
Replace Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

### Update Links
- Email: Change `mailto:` link in contact section
- LinkedIn: Update LinkedIn profile URL
- GitHub: Update GitHub profile URL
- Resume: Add your resume file and update link

## 📞 Contact Information

**Sravya Nadipineni**
- Email: nadipinenisravya@gmail.com
- Phone: 346-446-0634
- Website: nadipinenisravya.com
- Location: Houston, Texas, USA

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🎯 Tips for Best Results

1. **Test on Mobile**: Always test on different devices
2. **Check Links**: Verify all links work correctly
3. **Optimize Images**: Use compressed images for faster loading
4. **Update Regularly**: Keep your portfolio current with latest projects
5. **Get Feedback**: Ask others to review and provide feedback
6. **SEO**: Add meta tags for better search engine visibility

## 🚀 Next Steps

1. Customize all content with your information
2. Update images and links
3. Test on multiple devices and browsers
4. Deploy to your hosting platform
5. Share your portfolio with potential employers

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**
