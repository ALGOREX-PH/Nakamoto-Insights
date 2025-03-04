import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Remove edge runtime to ensure environment variables are accessible
 
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  // Check if API key exists
  if (!process.env.OPENAI_API_KEY) {
    return new Response("Missing API key", { status: 400 });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid messages format", { status: 400 });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: 'system',
          content: 'You are Alex Nakamoto, a renowned cryptocurrency analyst and blockchain expert. Provide detailed, accurate analysis of crypto markets, blockchain technology, and digital assets. Your responses should be professional, data-driven, and focused on helping users understand the crypto ecosystem. Keep responses concise but informative.',
        },
        ...messages,
      ],
    });
 
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat request" }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}