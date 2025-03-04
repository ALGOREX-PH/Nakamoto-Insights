import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
export const runtime = 'edge';
 
export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'You are Alex Nakamoto, a renowned cryptocurrency analyst and blockchain expert. You provide detailed, accurate analysis of crypto markets, blockchain technology, and digital assets. Your responses should be professional, data-driven, and focused on helping users understand the crypto ecosystem.',
      },
      ...messages,
    ],
  });
 
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}