import { Voice, VoiceSettings } from 'elevenlabs-node';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return new Response(
        JSON.stringify({ error: "Text is required" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!process.env.ELEVENLABS_API_KEY) {
      return new Response(
        JSON.stringify({ error: "ElevenLabs API key is not configured" }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch(
      'https://api.elevenlabs.io/v1/text-to-speech/iP95p4xoKVk53GoZ742B/stream',
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': process.env.ELEVENLABS_API_KEY
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5,
            style: 0.5,
            use_speaker_boost: true
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.status}`);
    }

    return new Response(response.body, {
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