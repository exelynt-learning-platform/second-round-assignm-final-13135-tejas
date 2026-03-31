import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../features/chat/chatSlice";

// Configure Redux store
// Here we register the chat slice reducer

export const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
});