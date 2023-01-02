const apiKey = process.env.OPENAI_KEY;

const whisper = new Whisper({
  apiKey: apiKey
});

whisper.on('transcription', async transcription => {
  translatedTextElement.textContent = transcription;

  // Send the transcription to the sentiment classifier
  // and get the prediction
  const classification = await classifySentiment(transcription);

  // Send the classification to the GPT-3 model
  // and get the generated text
  const generatedText = await generateText(classification);

  // Update the generated text element with the generated text
  generatedTextElement.textContent = generatedText;
});
