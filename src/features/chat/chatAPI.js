
import { GoogleGenerativeAI } from "@google/generative-ai";

// API key is securely stored in environment variables
// This ensures sensitive data is not exposed in the codebase
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize Gemini AI instance
const genAI = new GoogleGenerativeAI(apiKey);

// Function to send user message to AI and receive response
export const sendMessageToAI = async (message) => {
    try {
        
        // Select Gemini model
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
        });

        
        // Send user prompt to Gemini
        const result = await model.generateContent(message);

        // Extract response text from AI
        const response = result.response;

        return response.text();

    } catch (error) {
        // Log error for debugging
        console.error("Gemini API Error:", error);

        // Handle invalid API key or API failures
        if (error.message.includes("API_KEY")) {
            throw new Error("Invalid API key");
        }

        throw new Error("Failed to fetch AI response");
    }



}


