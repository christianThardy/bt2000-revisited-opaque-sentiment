const express = require('express');
const openai = require('openai');

openai.apiKey = 'YOUR_API_KEY';

const app = express();

app.get('/whisper', async (req, res) => {
  const { prompt } = req.query;

  try {
    const response = await openai.completion.create({
      model: 'whisper',
      prompt: prompt,
      max_tokens: 2048,
      n: 1,
      stop: '.',
      temperature: 0.5
    });

    res.send(response.choices[0].text);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
