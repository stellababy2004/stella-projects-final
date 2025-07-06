const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// CORS настройки
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// JSON парсинг
app.use(express.json());

// Статични файлове
app.use(express.static(path.join(__dirname)));

// Health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        service: 'Stella Portfolio Proxy'
    });
});

// API за тестване
app.get('/api/test', (req, res) => {
    res.json({
        message: 'Proxy server is working!',
        timestamp: new Date().toISOString()
    });
});

// Error handling
app.use((error, req, res, next) => {
    console.error('Proxy Error:', error);
    res.status(500).json({
        error: 'Proxy server error',
        message: error.message
    });
});

// Стартиране на сървъра
app.listen(PORT, () => {
    console.log(`🔧 Proxy server running on http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
});