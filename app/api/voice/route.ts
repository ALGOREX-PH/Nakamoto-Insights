import { Voice, VoiceSettings } from 'elevenlabs-node';

export const runtime = 'edge';

const voice = new Voice({
  apiKey: process.env.ELEVENLABS_API_KEY || '',
  voiceId: '21m00Tcm4TlvDq8ikWAM',
  settings: new VoiceSettings(0.5, 0.5, 0.5)
});

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return new Response(
        JSON.stringify({ error: "Text is required" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const audioBuffer = await voice.generateAudio(text);
    
    return new Response(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-cache'
      }
    });
  } catch (error) {
    console.error('Voice generation error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate speech' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}