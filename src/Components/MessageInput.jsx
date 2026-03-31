import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserMessage, sendMessage } from "../features/chat/chatSlice";

// Component responsible for handling user input and sending messages
const MessageInput = () => {
    // Local state to store the current text entered by the user
    const [text, setText] = useState("");

    // Redux dispatch function used to trigger actions
    const dispatch = useDispatch();

    // Function to send message
    const handleSend = () => {
        // Prevent sending empty or whitespace-only messages
        if (!text.trim()) return;

        // Add the user's message to Redux chat history
        dispatch(addUserMessage(text));

        // Trigger async API call to get AI response
        dispatch(sendMessage(text));

        // Clear input field after sending message
        setText("");
    };

    return (
        <div className="p-4 border-t border-gray-300 flex gap-2">
            <input
                type="text"
                placeholder="Type your message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSend();
                    }
                }}
            />
            {/* Button to send message */}
            <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Send
            </button>
        </div>
    )
}
export default MessageInput;