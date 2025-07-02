const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const HF_TOKEN = process.env.HF_TOKEN;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    // Добави system prompt към историята, ако няма такъв
    let history = req.body.inputs;
    if (Array.isArray(history)) {
      if (!history[0] || history[0].role !== "system") {
        history = [
          { role: "system", content: "You are a helpful cybersecurity assistant." },
          ...history
        ];
      }
    }
    const response = await fetch(
      'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HF_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: history })
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