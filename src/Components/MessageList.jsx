import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";
import { useEffect, useRef } from "react";
import Loader from "./Loader";

const MessageList = () => {
    // Access Redux state
    const { messages, loading, error } = useSelector((state) => state.chat);


    // Ref used for auto-scrolling chat
    const bottomRef = useRef(null);

    // Scroll to latest message whenever chat updates
    useEffect(() => {

        bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    }, [messages]);



    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-2">

            {/* Render chat history */}
            {messages.map((msg, index) => (
                <MessageItem key={index} message={msg} />
            ))}

            {/* Show loader while AI response is being fetched */}
            {loading && <Loader />}

            {/* Display error if API call fails */}
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Invisible element for auto scroll */}
            <div ref={bottomRef}></div>
        </div>
    )

}

export default MessageList;