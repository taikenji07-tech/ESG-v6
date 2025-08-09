

import { GoogleGenAI, Type } from "@google/genai";

// Ensure the API key is available in the environment variables
if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a dynamic response from the Gemini model based on a given prompt,
 * and assesses the relevance of the user's input.
 * @param {string} systemInstruction - The complete system instruction/prompt to send to the model.
 * @param {string} userMessage - The user's text input.
 * @returns {Promise<{ isRelevant: boolean; text: string; }>} - A promise that resolves to an object
 * containing a relevance flag and the generated text content.
 */
export const getDynamicResponse = async (systemInstruction: string, userMessage: string): Promise<{ isRelevant: boolean; text: string; }> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userMessage,
        config: {
            systemInstruction: systemInstruction,
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    isRelevant: {
                        type: Type.BOOLEAN,
                        description: "True if the user's message is a relevant answer to the question/context, false otherwise."
                    },
                    responseText: {
                        type: Type.STRING,
                        description: "The chatbot's response text. If not relevant, this text should politely guide the user to provide a relevant answer."
                    }
                },
                required: ["isRelevant", "responseText"]
            }
        }
    });

    const jsonStr = response.text.trim();
    const parsed = JSON.parse(jsonStr);
    
    return {
        isRelevant: parsed.isRelevant ?? false,
        text: parsed.responseText ?? "I'm not sure how to respond to that. Could you try rephrasing?"
    };

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Provide a graceful fallback message
    return {
        isRelevant: false, // Treat API errors as a need to retry
        text: "I'm having a bit of trouble connecting. Could you please try that again?"
    };
  }
};

/**
 * Translates text to Malay using the Gemini model.
 * @param {string} textToTranslate - The English text to translate.
 * @returns {Promise<string>} - A promise that resolves to the translated Malay text.
 */
export const translateToMalay = async (textToTranslate: string): Promise<string> => {
    if (!textToTranslate) return "";
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Translate the following English text to Malay. Return only the raw translated text, nothing else. Text: "${textToTranslate}"`,
            config: {
                temperature: 0.1,
            },
        });
        return response.text.trim();
    } catch (error) {
        console.error("Error translating text to Malay:", error);
        return textToTranslate; // Fallback to original text on error
    }
};

/**
 * Submits user data to a Google Form.
 * @param data - The user data to submit.
 * @returns {Promise<boolean>} - True on success, false on failure.
 */
export const submitToGoogleForm = async (data: { name: string; email: string; university: string; score: number; }) => {
    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd7M4iBTSwx2p-ZU6SKo5SiNag1XzNJrK7KixRcwSmesgnccw/formResponse';
    const formData = new FormData();
    formData.append('entry.518076302', data.name);
    formData.append('emailAddress', data.email);
    formData.append('entry.1019666774', data.university);
    formData.append('entry.124774752', String(data.score));

    try {
        await fetch(formUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });
        return true;
    } catch (error) {
        console.error('Error submitting Google Form:', error);
        return false;
    }
};
