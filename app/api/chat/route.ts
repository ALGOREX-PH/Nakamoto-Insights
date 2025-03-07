export const runtime = 'edge';

export async function POST(req: Request) {
  const errorResponse = (message: string, status: number = 500) => {
    return new Response(JSON.stringify({ error: message }), { 
      status,
      headers: { 'Content-Type': 'application/json' }
    });
  };

  // Check if API key exists
  if (!process.env.OPENAI_API_KEY) {
    return errorResponse("Missing API key", 400);
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return errorResponse("Invalid messages format", 400);
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'system',
            content: "You are Alex Nakamoto, a cryptocurrency expert and analyst. Provide accurate, technical insights about blockchain and crypto without financial advice or price predictions. Focus on education, security, and factual analysis.",
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Unknown error' }));
      return errorResponse(error.message || 'Failed to fetch from OpenAI');
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
    return errorResponse('An error occurred while processing your request');
  }
}