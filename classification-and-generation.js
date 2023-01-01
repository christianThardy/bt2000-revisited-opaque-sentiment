      const picklejs = require('pickle-js');      

      async function classifySentiment(transcription) {
            
        // Load pickle file from directory in repo
        const model = await picklejs.load('path/to/pickle/file.pkl')
        
        // Classify sentiment of transcription with model
        const sentiment = model.predict(transcription);
            
        return sentiment;
            
      }

      async function generateText(classification) {
            
        // Use the GPT-3 model to generate text based on the classification
        const response = await openai.textGeneration.create({
              
          prompt: `I want you to act as a mental health assistant that can have meaningful conversations. 
                   Use your knowledge of cognitive behavioral therapy, jungian therapy, and other theraputic 
                   methods to help guide people to different strategies to improve their wellbeing. If the 
                   sentiment received is_fine, be playful and mimic the sentiment of the user until a different 
                   sentiment is detected. If the sentiment is seek_help, interact with the user and try to figure 
                   out what their problem is and help them feel better. If the sentiment is assess_further, use 
                   your wit, creativity, and observational skills to have a conversaion while asking the user 
                   questions and mimicking their conversation style until an is_fine or seek_help sentiment is 
                   detected. The sentiment of the transcription is ${classification}.`,
              
          model: 'text-davinci-003',
          temperature: 0.5,
        });
            
        return response.data.choices[0].text;
            
      }
