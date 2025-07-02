# EmailJS Setup Instructions

## 🚀 Follow these steps to enable real email sending for your contact form

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Add Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, Yahoo, etc.)
- Follow the setup instructions for your provider
- **Copy your Service ID** (e.g., "service_xyz123")

### 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Reply to: {{reply_to}}
```

- **Copy your Template ID** (e.g., "template_abc456")

### 4. Get Your Public Key
- Go to "Account" → "General"
- **Copy your Public Key** (e.g., "user_def789")

### 5. Update Your Website
Replace the placeholder values in both `index.html` and `test.html`:

**Line with `emailjs.init("YOUR_PUBLIC_KEY");`:**
```javascript
emailjs.init("user_def789"); // Replace with your actual public key
```

**Line with `emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)`:**
```javascript
emailjs.send('service_xyz123', 'template_abc456', templateParams)
```

### 6. Test Your Form
1. Open your website
2. Fill out the contact form
3. Submit it
4. Check your email inbox for the message

### 📧 Email Limits (Free Plan)
- 200 emails per month
- For more emails, upgrade to a paid plan

### 🔒 Security Notes
- Your public key is safe to expose in client-side code
- EmailJS handles the secure email sending
- Consider adding rate limiting for production use

### 🛠️ Troubleshooting
- Check browser console for any errors
- Verify all IDs are correct (Service ID, Template ID, Public Key)
- Ensure your email service is properly configured
- Test with different email addresses

### 📱 Additional Features
- EmailJS supports email templates with variables
- You can add attachments (paid plans)
- CAPTCHA integration available
- Webhook support for advanced scenarios
