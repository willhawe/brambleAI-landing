# BrambleAI Landing Page

A simple, modern landing page with a signup form for collecting user updates. Features a responsive design with your company logo and a professional-looking contact form.

## Features

- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful gradient background with clean form design
- ✅ **Form Validation** - Client-side validation with user-friendly error messages
- 🔄 **Loading States** - Visual feedback during form submission
- 📊 **Form Storage** - Currently stores submissions in localStorage (easily configurable for backend)
- 🖼️ **Logo Support** - Displays your company logo with fallback handling

## Files Structure

```
brambleAI-landing/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── logo.png           # Your company logo (add this file)
└── README.md          # This file
```

## Setup Instructions

### 1. Add Your Logo
- Replace `logo.png` with your actual company logo
- Recommended size: 120px height or larger
- Supported formats: PNG, JPG, SVG

### 2. Customize Content
- Edit `index.html` to update:
  - Company name (currently "BrambleAI")
  - Page title and descriptions
  - Form fields as needed

### 3. Configure Form Submission
The form currently stores data in localStorage for testing. To connect to a real backend:

**Option A: Use a Form Service (Recommended for beginners)**
- [Formspree](https://formspree.io/) - Easy form backend
- [Netlify Forms](https://www.netlify.com/products/forms/) - If hosting on Netlify
- [Typeform](https://www.typeform.com/) - Advanced form builder

**Option B: Custom Backend**
- Uncomment and modify the fetch code in `script.js` (lines 66-78)
- Replace `YOUR_FORM_ENDPOINT_URL` with your API endpoint

## Publishing to GoDaddy

### Method 1: File Manager (Easiest)

1. **Log into GoDaddy**
   - Go to your GoDaddy account
   - Navigate to "My Products" → "Web Hosting"

2. **Access File Manager**
   - Click "Manage" next to your hosting plan
   - Go to "Files" → "File Manager"

3. **Upload Files**
   - Navigate to the `public_html` folder (or `www` folder)
   - Upload all files: `index.html`, `styles.css`, `script.js`, and your `logo.png`
   - Make sure `index.html` is in the root directory

4. **Test Your Site**
   - Visit your domain to see the landing page

### Method 2: FTP Upload

1. **Get FTP Credentials**
   - In your GoDaddy hosting dashboard, find FTP details
   - Note: hostname, username, password

2. **Use FTP Client**
   - Download [FileZilla](https://filezilla-project.org/) (free)
   - Connect using your FTP credentials
   - Upload files to the `public_html` directory

3. **Set Permissions**
   - Ensure files have proper permissions (644 for files, 755 for directories)

### Method 3: GoDaddy Website Builder Integration

1. **Export as ZIP**
   - Create a ZIP file with all your files
   - Some GoDaddy plans allow direct ZIP uploads

## Form Data Collection

### Current Setup (Testing)
- Form submissions are stored in browser's localStorage
- Open browser developer tools → Application → Local Storage to view submissions

### Production Setup Options

1. **Email Integration**
   ```javascript
   // Add to script.js after form validation
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
   });
   ```

2. **Google Sheets Integration**
   - Use Google Apps Script to create a web app
   - Connect form to automatically populate a Google Sheet

3. **Email Service (EmailJS)**
   ```html
   <!-- Add to head of index.html -->
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

## Customization Tips

### Colors
Edit `styles.css` to change the color scheme:
- Primary gradient: `.submit-btn` and `body` background
- Form colors: `.form-group` input styles
- Text colors: Various color properties

### Content
- Update company name in `index.html`
- Modify form fields as needed
- Change hero text and descriptions

### Logo
- Recommended logo size: 60px height
- Supports PNG, JPG, SVG formats
- Automatically hides if logo file is missing

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Logo Not Showing
- Check that `logo.png` exists in the same folder as `index.html`
- Verify the filename matches exactly (case-sensitive)
- Try clearing browser cache

### Form Not Submitting
- Check browser console for JavaScript errors
- Ensure all required fields are filled
- Verify privacy policy checkbox is checked

### Styling Issues
- Clear browser cache
- Check that `styles.css` is in the same folder
- Verify CSS file is loading (check Network tab in developer tools)

## Security Notes

- The current setup is client-side only
- For production, implement server-side validation
- Consider adding CAPTCHA for spam protection
- Use HTTPS for any real form submissions

## Support

For technical issues with GoDaddy hosting:
- Contact GoDaddy support
- Check GoDaddy's help documentation
- Ensure your hosting plan supports custom HTML files

---

**Ready to launch!** 🚀 Simply upload these files to your GoDaddy hosting and your landing page will be live. 