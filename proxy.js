const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Сложи тук своя Hugging Face API токен (НЕ го качвай в публично repo!)
const HF_TOKEN = 'hf_ТВОЯ_ИСТИНСКИ_ТОКЕН';

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/stellababy2004/Cyber-CHAT-Mistral',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HF_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: req.body.inputs })
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Proxy error', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on http://localhost:${PORT}`);
});