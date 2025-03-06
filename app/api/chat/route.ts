import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
export const runtime = 'edge';

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
      model: 'gpt-4-turbo-preview',
      stream: true,
      messages: [
        {
          role: 'system',
          content: "You are Alex Nakamoto, a cryptocurrency expert and analyst. Provide accurate, technical insights about blockchain and crypto without financial advice or price predictions. Focus on education, security, and factual analysis."
        },
        ...messages,
      ],
    });
 
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Error:', error);
    return new Response("An error occurred", { status: 500 });
  }
}