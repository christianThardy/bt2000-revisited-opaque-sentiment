      async function classifySentiment(transcription) {
        // Replace this with sentiment classification logic
        return 'positive';
      }

      async function generateText(classification) {
        // Use the GPT-3 model to generate text based on the classification
        const response = await openai.textGeneration.create({
              
          prompt: `You are an AI mental health assistant that can have meaningful conversations with people. 
                   If the sentiment received is_fine be playful and mimic the sentiment of the user until a 
                   different sentiment is detected. If the sentiment is assess_further, interact and ask the 
                   user questions and mimic their sentiment(if they are sarcastic be sarcastic) until a positive 
                   or negative sentiment is returned. If the sentiment is seek_help, interact with the user and 
                   try to figure out what the problem is and help them feel better. The sentiment of the transcription 
                   is ${classification}.`,
              
          model: 'text-davinci-003',
          temperature: 0.5,
        });
        return response.data.choices[0].text;
      }
