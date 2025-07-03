const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set proper MIME types
app.use(express.static('.', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        } else if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        } else if (path.endsWith('.html')) {
            res.setHeader('Content-Type', 'text/html');
        }
    }
}));

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle specific routes for project pages
app.get('/cyber-threat-map', (req, res) => {
    res.sendFile(path.join(__dirname, 'cyber-threat-map.html'));
});

app.get('/cyber-threat-map.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'cyber-threat-map.html'));
});

app.get('/phishing-check', (req, res) => {
    res.sendFile(path.join(__dirname, 'phishing-check.html'));
});

app.get('/phishing-check.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'phishing-check.html'));
});

app.get('/threat-hunting', (req, res) => {
    res.sendFile(path.join(__dirname, 'threat-hunting.html'));
});

app.get('/threat-hunting.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'threat-hunting.html'));
});

app.get('/phishing-response-guide', (req, res) => {
    res.sendFile(path.join(__dirname, 'phishing-response-guide.html'));
});

app.get('/phishing-response-guide.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'phishing-response-guide.html'));
});

app.get('/live-threats', (req, res) => {
    res.sendFile(path.join(__dirname, 'live-threats.html'));
});

app.get('/live-threats.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'live-threats.html'));
});

app.get('/cv', (req, res) => {
    res.sendFile(path.join(__dirname, 'cv.html'));
});

app.get('/cv.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'cv.html'));
});

// JavaScript files with proper MIME type
app.get('/js/particles-config.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'js', 'particles-config.js'));
});

// CSS files with proper MIME type
app.get('/styles/common.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'styles', 'common.css'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🌐 Open your browser and go to: http://localhost:${PORT}`);
    console.log(`✅ MIME types configured properly`);
});