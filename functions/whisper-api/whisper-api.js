const openai = require('openai');

openai.apiKey = process.env.OPENAI_KEY;

exports.handler = async function(event, context) {
  const { prompt } = event.queryStringParameters;

  try {
    const response = await openai.completion.create({
      model: 'whisper',
      prompt: prompt,
      max_tokens: 2048,
      n: 1,
      stop: '.',
      temperature: 0.5
    });

    return {
      statusCode: 200,
      body: response.choices[0].text
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error
    };
  }
};
