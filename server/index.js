import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "15mb" }));

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
// Allow override via env; default to widely available model
const MODEL_NAME = process.env.GEMINI_MODEL || "gemini-1.5-flash";

app.post("/api/translate", async (req, res) => {
  try {
    if (!genAI) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not set on the server." });
    }

    const { imageUrl, targetLang = "en" } = req.body || {};
    if (!imageUrl) {
      return res.status(400).json({ error: "imageUrl is required" });
    }

    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image (${imageResponse.status}): ${imageResponse.statusText}`);
    }

    const mimeType = imageResponse.headers.get("content-type") || "image/png";
    const buffer = Buffer.from(await imageResponse.arrayBuffer());
    const base64Data = buffer.toString("base64");

    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const prompt = `
You are a professional comics translator.
Extract every piece of text visible on this page image and translate it into ${targetLang}.
Return JSON with:
- source_text: the extracted original text (preserve reading order as best as possible)
- translated_text: the translation into ${targetLang}
- language_detected: short code for the source language
Keep it concise and omit stylistic commentary.
`;

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt.trim() },
            { inlineData: { data: base64Data, mimeType } },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.4,
        responseMimeType: "application/json",
      },
    });

    const responseText = result.response.text();
    let parsed;
    try {
      parsed = JSON.parse(responseText);
    } catch {
      parsed = { translated_text: responseText };
    }

    return res.json({
      translation: parsed.translated_text || "",
      raw: parsed,
      targetLang,
      source: imageUrl,
    });
  } catch (error) {
    console.error("[translate] error:", error);
    return res.status(500).json({ error: error.message || "Translation failed" });
  }
});

const port = process.env.PORT || 8787;
app.listen(port, () => {
  console.log(`Translation server (Gemini 3) listening on http://localhost:${port}`);
});
