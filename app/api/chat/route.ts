import { GoogleGenerativeAI } from '@google/generative-ai';
export const runtime = 'edge';

// Try Gemini first, fallback to OpenAI
const DEFAULT_PROVIDER = 'gemini';

export async function POST(req: Request) {
  // Check if any API key exists
  if (!process.env.OPENAI_API_KEY && !process.env.GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "No API keys available" }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages format" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Try Gemini first if API key is available
    if (process.env.GEMINI_API_KEY && DEFAULT_PROVIDER === 'gemini') {
      try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // Use gemini-2.0-flash for faster responses, fallback to pro-mini
        const model = genAI.getGenerativeModel({ 
          model: 'gemini-2.0-flash'
        });
      
        const systemPrompt = "You are Alex Nakamoto, a cryptocurrency expert and analyst. Provide accurate, technical insights about blockchain and crypto without financial advice or price predictions. Focus on education, security, and factual analysis.";
        const userMessages = messages.map(msg => msg.content).join('\n');
        const fullPrompt = `${systemPrompt}\n\nUser Messages:\n${userMessages}`;

        try {
          const result = await model.generateContentStream({
            contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
            generationConfig: {
              maxOutputTokens: 2500,
              temperature: 0.7,
            },
          });

          const stream = new ReadableStream({
            async start(controller) {
              try {
                for await (const chunk of result.stream) {
                  const text = chunk.text();
                  const data = {
                    choices: [{
                      delta: { content: text },
                      finish_reason: null
                    }]
                  };
                  controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
                }
                controller.enqueue('data: [DONE]\n\n');
                controller.close();
              } catch (error) {
                controller.error(error);
              }
            }
          });

          return new Response(stream, {
            headers: {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache',
              'Connection': 'keep-alive',
            },
          });
        } catch (error) {
          // If flash model fails, try pro-mini
          if (error.message?.includes('model not found')) {
            const miniModel = genAI.getGenerativeModel({ 
              model: 'gemini-pro-mini'
            });

            const result = await miniModel.generateContentStream({
              contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
              generationConfig: {
                maxOutputTokens: 2500,
                temperature: 0.7,
              },
            });

            const stream = new ReadableStream({
              async start(controller) {
                try {
                  for await (const chunk of result.stream) {
                    const text = chunk.text();
                    const data = {
                      choices: [{
                        delta: { content: text },
                        finish_reason: null
                      }]
                    };
                    controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
                  }
                  controller.enqueue('data: [DONE]\n\n');
                  controller.close();
                } catch (error) {
                  controller.error(error);
                }
              }
            });

            return new Response(stream, {
              headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
              },
            });
          }
          throw error;
        }
      } catch (error) {
        console.error('Gemini Error:', error);
        // If Gemini fails, try OpenAI
        if (process.env.OPENAI_API_KEY) {
          console.log('Falling back to OpenAI...');
        } else {
          throw error;
        }
      }
    }

    // Fallback to OpenAI if Gemini fails or not available
    if (process.env.OPENAI_API_KEY) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'OpenAI-Beta': 'assistants=v1',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'OpenAI-Organization': process.env.OPENAI_ORG_ID || '',
          },
          body: JSON.stringify({
            model: 'gpt-4-turbo-preview',
            max_tokens: 2500,
            messages: [
              {
                role: 'system',
                content: "You are Alex Nakamoto, a cryptocurrency expert and analyst. Provide accurate, technical insights about blockchain and crypto without financial advice or price predictions. Focus on education, security, and factual analysis.",
              },
              ...messages,
            ],
            stream: true,
            temperature: 0.7,
          }),
        });

        if (response.ok) {
          return new Response(response.body, {
            headers: {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache',
              'Connection': 'keep-alive',
            },
          });
        }
      } catch (error) {
        console.error('OpenAI Error:', error);
        throw error;
      }
    }
 
    throw new Error('No available AI service');
  } catch (error) {
    console.error('Error:', error);
    let errorMessage = 'An error occurred while processing your request. Please try again later.';
    if (error.message?.includes('location is not supported')) {
      errorMessage = 'This region is not currently supported. Falling back to OpenAI...';
      // If region is not supported for Gemini, try OpenAI
      if (process.env.OPENAI_API_KEY) {
        try {
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'OpenAI-Beta': 'assistants=v1',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
              'OpenAI-Organization': process.env.OPENAI_ORG_ID || '',
            },
            body: JSON.stringify({
              model: 'gpt-4-turbo-preview',
              max_tokens: 2500,
              messages: [
                {
                  role: 'system',
                  content: "You are Alex Nakamoto, a cryptocurrency expert and analyst. Provide accurate, technical insights about blockchain and crypto without financial advice or price predictions. Focus on education, security, and factual analysis.",
                },
                ...messages,
              ],
              stream: true,
              temperature: 0.7,
            }),
          });

          if (response.ok) {
            return new Response(response.body, {
              headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
              },
            });
          }
        } catch (error) {
          console.error('OpenAI Fallback Error:', error);
        }
      }
    }
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}