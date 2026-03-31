import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

// Main container that combines header, chat history and input area
const ChatBox = () => {

  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to from-gray-100 to-gray-200 p-4">

      {/* Chat container */}
      <div className="w-full max-w-3xl h-[85vh] bg-gray-100 rounded-2xl shadow-lg flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300 shrink-0">

          <div className="flex items-center gap-3">

            {/* AI icon */}
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-semibold">
              AI 
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-800">
                AI Chatbot
              </h1>
              
            </div>

          </div>

        </div>

        {/* Chat messages area */}
        <div className="flex-1 bg-gray-50 overflow-y-auto scrollbar-hide">
          <MessageList />
        </div>

        {/* Input section */}
        <div className="bg-white">
          <MessageInput />
        </div>

      </div>

    </div>

  );

};

export default ChatBox;