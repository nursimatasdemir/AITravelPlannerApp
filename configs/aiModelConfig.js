const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_AI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model:"gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP:0.95,
    topK:40,
    maxOutputTokens: 8192,
    responseMimeType:"application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
          role: "user",
          parts: [{ text: "Hello, I have 2 dogs in my house." }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
    ],   
});

    
