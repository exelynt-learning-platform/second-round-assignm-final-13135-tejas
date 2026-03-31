
// Component responsible for rendering individual messages
const MessageItem = ({ message }) => {

    const isUser = message.sender === "user";

    return (

        // Align user messages to right and AI messages to left
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>

            <div
                className={`px-4 py-2 rounded-lg max-w-xs ${isUser
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                    }`}
            >
                {message.text}
            </div>

        </div>

    );

};

export default MessageItem;