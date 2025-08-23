# 🚀 Formspree Setup Guide

## Quick Setup (5 minutes)

### 1. Sign Up for Formspree
- Go to [formspree.io](https://formspree.io)
- Create a free account
- Verify your email

### 2. Create a New Form
- Click "New Form" 
- Give it a name (e.g., "Lasse Melcher Contact")
- Copy the endpoint URL (looks like: `https://formspree.io/f/abc123`)

### 3. Update Your Configuration
Edit `src/lib/config.js` and replace:
```javascript
formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
```
with your actual endpoint:
```javascript
formspreeEndpoint: "https://formspree.io/f/abc123"
```

### 4. Test Your Form
- Fill out the contact form
- Submit it
- Check your email for the message
- Check Formspree dashboard for submissions

## ✨ What You Get

✅ **Instant email notifications** when someone contacts you  
✅ **Spam protection** built-in  
✅ **Form validation** (required fields)  
✅ **Success/error handling**  
✅ **Submission dashboard** in Formspree  
✅ **Mobile-friendly** design  
✅ **Multilingual support** (German/English)  

## 🔧 Customization Options

### Add Honeypot (Extra Spam Protection)
Add this hidden field to your form:
```html
<input type="text" name="_gotcha" style="display:none" />
```

### Custom Success Page
Add this to redirect after submission:
```html
<input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
```

### Subject Line
Add this to customize email subject:
```html
<input type="hidden" name="_subject" value="New Contact from Website" />
```

## 📱 Form Features

- **Required field validation**
- **Email format validation**
- **Focus states with ring effects**
- **Responsive design**
- **Accessibility compliant**
- **Multilingual placeholders**

## 🚨 Troubleshooting

**Form not working?**
1. Check your endpoint URL is correct
2. Verify your Formspree account is active
3. Check browser console for errors
4. Ensure you're not in development mode (Formspree works in production)

**Not receiving emails?**
1. Check spam folder
2. Verify email in Formspree settings
3. Check Formspree dashboard for submissions

## 💰 Pricing

- **Free tier**: 50 submissions/month
- **Pro tier**: $15/month for unlimited submissions
- **Enterprise**: Custom pricing

---

**That's it!** Your contact form is now fully functional with professional email handling. 🎉
