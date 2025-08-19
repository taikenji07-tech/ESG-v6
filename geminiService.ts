

import { GoogleGenAI, Type } from "@google/genai";
import type { Language } from './types';

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
export const submitToGoogleForm = async (data: { name: string; email: string; university: string; score: number; phoneNumber: string; }) => {
    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScJmjieW8wMXLzRNP6qcwbmIGKgzWAdxG6lLjxyN1YJ28Bc8Q/formResponse';
    const formData = new FormData();
    formData.append('entry.308986988', data.name);
    formData.append('emailAddress', data.email);
    formData.append('entry.1713430391', data.university);
    formData.append('entry.1994504760', String(data.score));
    formData.append('entry.823726534', data.phoneNumber);

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

/**
 * Validates an email address using the Gemini API.
 * @param {string} email - The email string to validate.
 * @returns {Promise<{ isValid: boolean; reason: string; email: string | null; }>} - A promise that resolves to the validation result.
 */
export const validateEmailWithAI = async (email: string): Promise<{ isValid: boolean; reason: string; email: string | null; }> => {
  try {
    const systemInstruction = `You are an expert email address validator. Your task is to analyze the user's input and determine if it is a valid email address.
If it is valid, return isValid: true and a confirmation message.
If it is invalid (e.g., missing '@', domain, or has typos like 'gamil.com'), return isValid: false and provide a brief, friendly reason why.
If you can plausibly correct a typo (like 'user@gamil.com' to 'user@gmail.com'), provide the corrected email in the 'email' field.
Respond ONLY with a JSON object with the following schema: { "isValid": boolean, "reason": string, "email": string | null }`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Email to validate: "${email}"`,
        config: {
            systemInstruction: systemInstruction,
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    isValid: {
                        type: Type.BOOLEAN,
                        description: "True if the email is valid, false otherwise."
                    },
                    reason: {
                        type: Type.STRING,
                        description: "A brief, friendly explanation for why the email is invalid, or a confirmation message if valid."
                    },
                    email: {
                        type: Type.STRING,
                        description: "The corrected email address if a plausible typo was found, otherwise the original email if valid, or null if invalid and uncorrectable."
                    }
                },
                required: ["isValid", "reason"]
            }
        }
    });

    const jsonStr = response.text.trim();
    const parsed = JSON.parse(jsonStr);

    return {
        isValid: parsed.isValid ?? false,
        reason: parsed.reason ?? "Sorry, that doesn't look like a valid email. Please try again.",
        email: parsed.email ?? null
    };

  } catch (error) {
    console.error("Error calling Gemini API for email validation:", error);
    // Fallback in case of API error. Assume it's invalid and ask user to re-enter.
    return {
        isValid: false,
        reason: "I'm having a little trouble checking that email. Could you please enter it again?",
        email: null
    };
  }
};

/**
 * Validates a phone number using the Gemini API.
 * @param {string} phone - The phone number string to validate.
 * @returns {Promise<{ isValid: boolean; reason: string; phoneNumber: string | null; }>} - A promise that resolves to the validation result.
 */
export const validatePhoneNumberWithAI = async (phone: string): Promise<{ isValid: boolean; reason: string; phoneNumber: string | null; }> => {
  try {
    const systemInstruction = `You are an expert phone number validator, specializing in Malaysian and international formats. Your task is to analyze the user's input.
- If it is a valid phone number (e.g., "0123456789", "+60123456789", "03-12345678"), return isValid: true and a confirmation message. Standardize the number to a simple format like "0123456789" if possible.
- If it is invalid (e.g., has letters, too few/many digits), return isValid: false and provide a brief, friendly reason why it's invalid.
- Respond ONLY with a JSON object with the following schema: { "isValid": boolean, "reason": string, "phoneNumber": string | null }`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Phone number to validate: "${phone}"`,
        config: {
            systemInstruction: systemInstruction,
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    isValid: {
                        type: Type.BOOLEAN,
                        description: "True if the phone number is valid, false otherwise."
                    },
                    reason: {
                        type: Type.STRING,
                        description: "A brief, friendly explanation for why the number is invalid, or a confirmation message if valid."
                    },
                    phoneNumber: {
                        type: Type.STRING,
                        description: "The corrected/standardized phone number if valid, otherwise null."
                    }
                },
                required: ["isValid", "reason"]
            }
        }
    });

    const jsonStr = response.text.trim();
    const parsed = JSON.parse(jsonStr);

    return {
        isValid: parsed.isValid ?? false,
        reason: parsed.reason ?? "Sorry, that doesn't look like a valid phone number. Please try again.",
        phoneNumber: parsed.phoneNumber ?? null
    };

  } catch (error) {
    console.error("Error calling Gemini API for phone validation:", error);
    return {
        isValid: false,
        reason: "I'm having a little trouble checking that phone number. Could you please enter it again?",
        phoneNumber: null
    };
  }
};

/**
 * Generates a thoughtful reminder about the environmental impact of using AI.
 * @param {number} co2 - The estimated CO2 generated during the session.
 * @param {Language} language - The target language ('en' or 'ms').
 * @returns {Promise<string>} - A promise that resolves to the reminder text.
 */
export const getAIImpactReminder = async (co2: number, language: Language): Promise<string> => {
    try {
        const languageName = language === 'ms' ? 'Malay' : 'English';
        const systemInstruction = `You are a friendly, encouraging AI assistant for students. Your goal is to write a short, single-paragraph closing remark for a chatbot session about ESG.
The user just completed a chat session that generated approximately ${co2.toFixed(1)}g of CO2.
Your remark should:
1. Acknowledge this small environmental cost in a friendly, non-judgmental way.
2. Gently remind the user that all digital activities, including using powerful AI like this, have a real-world footprint.
3. End on a positive and empowering note, encouraging them to be mindful and deliberate in their use of technology.
Keep it concise, warm, and inspiring. Do not use markdown or special formatting.
The final output must be in ${languageName}.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: "Generate the closing remark now.",
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7
            }
        });

        return response.text.trim();
    } catch (error) {
        console.error("Error getting AI impact reminder:", error);
        // Provide a graceful fallback message that still conveys the point
        if (language === 'ms') {
            return "Setiap klik menyumbang kepada jejak digital kita. Mari kita gunakan teknologi dengan penuh kesedaran dan untuk kebaikan!";
        }
        return "Every click contributes to our digital footprint. Let's use technology mindfully and for good!";
    }
};
