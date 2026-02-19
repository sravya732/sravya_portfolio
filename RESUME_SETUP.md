# Resume Setup Instructions

## How to Add Your Resume

The portfolio is now configured to download your resume when the "Download Resume" button is clicked.

### Option 1: Add Your Resume File (Recommended)

1. **Prepare your resume file:**
   - Save your resume as `resume.pdf` (or any PDF file)
   - Place it in the same folder as `index.html`

2. **Update the file name in script.js (if needed):**
   - Open `script.js`
   - Find line 146: `const resumeUrl = 'resume.pdf';`
   - Change `'resume.pdf'` to your file name if different

3. **Test it:**
   - Open `index.html` in your browser
   - Click "Download Resume" button
   - Your resume should download automatically

### Option 2: Link to External Resume

If you host your resume online (Google Drive, Dropbox, etc.):

1. Get the direct download link to your resume
2. Open `script.js`
3. Replace line 146 with:
   ```javascript
   const resumeUrl = 'YOUR_DIRECT_LINK_HERE';
   ```
4. Example (Google Drive):
   ```javascript
   const resumeUrl = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';
   ```

### Option 3: Open Resume in New Tab

If you prefer to open the resume in a new tab instead of downloading:

1. Open `script.js`
2. Replace the resume section (lines 144-152) with:
   ```javascript
   } else if (text.includes('resume')) {
       window.open('YOUR_RESUME_URL', '_blank');
   ```

## LinkedIn Integration

Your LinkedIn profile is already integrated:
- **LinkedIn URL:** https://www.linkedin.com/in/sravya-n-33b38a210
- Click "Visit LinkedIn" button to open your profile

## Testing

After adding your resume:
1. Open `index.html` in your browser
2. Try all three methods:
   - Click "Download Resume" in hero section
   - Click "Download Resume" in contact section
   - Click "Visit LinkedIn" button

## Troubleshooting

**Resume not downloading?**
- Make sure the file is in the same folder as `index.html`
- Check the file name matches exactly (case-sensitive)
- Try a different browser
- Check browser console for errors (F12 → Console)

**File name has spaces?**
- Use underscores instead: `My_Resume.pdf` instead of `My Resume.pdf`

**External link not working?**
- Make sure the URL is a direct download link
- Test the URL in your browser first

## File Structure

```
sravya-portfolio-vanilla/
├── index.html          ← Main file
├── styles.css          ← Styling
├── script.js           ← JavaScript (contains resume logic)
├── resume.pdf          ← ADD YOUR RESUME HERE
└── README.md           ← Documentation
```

---

**Questions?** Check the browser console (F12) for any error messages.
