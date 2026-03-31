# second-round-assignm-final-13135-tejas
Final Project Assignment - This repository contains the complete final project code and documentation.


# AI Chatbox Application
This project is a React-based AI Chatbox application that integrates with Google Gemini API to provide real-time AI responses. The application uses Redux Toolkit for centralized state management, handling chat history, loading states, and API error handling efficiently.

User messages are stored in the Redux store and dispatched through Redux async thunks, which manage asynchronous API requests to the Gemini model. Once the AI response is received, it is appended to the chat history and rendered dynamically in the UI.

The interface is built using React and Tailwind CSS, providing a clean, responsive chat experience with features such as auto-scrolling messages, loading indicators, and message alignment for both user and AI responses.

API authentication is handled securely using environment variables (.env) to protect the API key. The application follows a modular architecture separating components, Redux state logic, and API integration, ensuring maintainability and scalability.