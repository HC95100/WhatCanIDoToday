import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { location, startDate, endDate, eventType, cost, otherDetails } = await req.json();

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY not set in Supabase secrets.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    let dateClause = "";
    let isOngoingActivity = false;

    const ongoingKeywords = ["plein air", "randonnée", "visite", "parc", "musée", "galerie", "activité continue", "toute l'année", "loisir", "détente", "balade", "circuit", "site touristique", "attraction", "exposition permanente"];
    const careerKeywords = ["emploi", "alternance", "stage", "entrepreneuriat", "job dating", "conférence", "salon", "forum", "recrutement", "carrière", "formation"];

    const lowerCaseEventType = eventType ? eventType.toLowerCase() : '';
    const lowerCaseOtherDetails = otherDetails ? otherDetails.toLowerCase() : '';

    // Check for ongoing activities
    if (ongoingKeywords.some(keyword => lowerCaseEventType.includes(keyword) || lowerCaseOtherDetails.includes(keyword))) {
      isOngoingActivity = true;
    }

    if (isOngoingActivity) {
      dateClause = `qui sont disponibles toute l'année ou sur une longue période`;
      // If it's an ongoing activity, we might still want to filter by date if provided, but emphasize year-round
      if (startDate && startDate !== "any" && endDate && endDate !== "any") {
        dateClause += ` et spécifiquement pertinents pour la période du ${startDate} au ${endDate}`;
      } else if (startDate && startDate !== "any") {
        dateClause += ` et pertinents à partir du ${startDate}`;
      } else if (endDate && endDate !== "any") {
        dateClause += ` et pertinents jusqu'au ${endDate}`;
      }
    } else {
      // Standard date clause for specific events
      if (startDate && startDate !== "any" && endDate && endDate !== "any") {
        dateClause = `pour la période du ${startDate} au ${endDate}`;
      } else if (startDate && startDate !== "any") {
        dateClause = `à partir du ${startDate}`;
      } else if (endDate && endDate !== "any") {
        dateClause = `jusqu'au ${endDate}`;
      } else {
        dateClause = `pour n'importe quelle date`;
      }
    }

    let prompt = `Trouve une liste de 5 à 10 événements ou activités à faire à ${location} ${dateClause}.`;

    // Add event type and other details
    if (eventType) {
      prompt += ` Le type d'événement souhaité est "${eventType}".`;
    }
    if (cost && cost !== "any") {
      prompt += ` Le coût est "${cost}".`;
    }
    if (otherDetails) {
      prompt += ` Autres précisions: "${otherDetails}".`;
    }

    // Add specific instructions for career events if keywords are present
    if (careerKeywords.some(keyword => lowerCaseEventType.includes(keyword) || lowerCaseOtherDetails.includes(keyword))) {
      prompt += ` Pour chaque événement, incluez dans la description les horaires, si l'inscription est requise, et les services utiles (ex: ateliers, stands, conférences).`;
    }

    prompt += ` Fournis une liste de 5 à 10 événements pertinents avec leur nom, une courte description (incluant horaires, inscription, services si pertinents), la date, le lieu précis et si possible un lien. Réponds en format JSON, comme un tableau d'objets, par exemple: [{"name": "Nom de l'événement", "description": "Description courte incluant horaires, inscription, services si pertinents", "date": "Date", "location": "Lieu", "link": "URL"}]. Si aucun événement n'est trouvé, retourne un tableau vide.`;

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json();
      console.error('Gemini API error:', errorData);
      return new Response(JSON.stringify({ error: 'Failed to fetch from Gemini API', details: errorData }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: geminiResponse.status,
      });
    }

    const geminiData = await geminiResponse.json();
    const textResponse = geminiData.candidates[0]?.content?.parts[0]?.text;

    // Attempt to parse the text response as JSON
    let events = [];
    try {
      // Extract content between ```json\n and ```
      const jsonMatch = textResponse.match(/```json\n([\s\S]*?)\n```/);
      let jsonString = textResponse;

      if (jsonMatch && jsonMatch[1]) {
        jsonString = jsonMatch[1].trim();
      } else {
        // If no markdown block is found, assume the entire response is JSON or needs trimming
        jsonString = textResponse.trim();
      }

      events = JSON.parse(jsonString);
    } catch (parseError) {
      console.error('Failed to parse Gemini response as JSON:', parseError, 'Raw text:', textResponse);
      // If parsing fails, return a generic error or the raw text
      return new Response(JSON.stringify({ error: 'Gemini returned an unparseable response.', raw: textResponse }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      });
    }

    return new Response(JSON.stringify(events), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Edge Function error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});