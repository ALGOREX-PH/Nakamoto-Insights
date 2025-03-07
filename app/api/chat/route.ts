import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Gemini API key is missing" }),
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
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const chat = model.startChat({
      history: messages.map(msg => ({
        role: msg.role === "user" ? "user" : "model",
        parts: msg.content,
      })),
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(
      "You are Alex Nakamoto, a cryptocurrency expert and analyst. " +
      messages[messages.length - 1].content
    );
    const response = await result.response;
    
    return new Response(
      JSON.stringify({
        choices: [{
          delta: { content: response.text() },
        }],
      }),
      { 
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        } 
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'An error occurred while processing your request'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
    });

    if (!response.ok) {
      const error = await response.json();
      const errorMessage = error.error?.message || error.message;
      if (errorMessage?.includes('region') || errorMessage?.includes('territory') || errorMessage?.includes('country')) {
        throw new Error('This service is not available in your region. Please try using a VPN.');
      }
      throw new Error(errorMessage || 'OpenAI API request failed');
    }
 
    // Transform the response into a readable stream
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'An error occurred while processing your request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}