import { GoogleGenAI } from "@google/genai";

export async function getResponse(userPrompt: string) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userPrompt,
    config: {
      candidateCount: 2
    }
  });

  return response.text;
}

// main();
