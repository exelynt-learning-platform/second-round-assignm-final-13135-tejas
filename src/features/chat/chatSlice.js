import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendMessageToAI } from "./chatAPI";


/*
Async thunk for handling AI API request.
This manages asynchronous operations like:
- API request
- loading state
- error handling
*/

export const sendMessage = createAsyncThunk(
    "chat/sendMessage",
    async (message, { rejectWithValue }) => {
        try {
            const response = await sendMessageToAI(message);
            return response;
        } catch (error) {
            return rejectWithValue("Failed to fetch AI response");
        }
    }
);

// Chat slice manages chat-related state
const chatSlice = createSlice({
    name: "chat",

    // Initial Redux state
    initialState: {
        messages: [],
        loading: false,
        error: null,
    },
    reducers: {

        // Add user message to chat history
        addUserMessage: (state, action) => {
            state.messages.push({
                id: Date.now(), // unique id for rendering
                sender: "user", // message sender
                text: action.payload, // message sender
            });
        },
    },
    extraReducers: (builder) => {
        // When API request starts
        builder.addCase(sendMessage.pending, (state) => {

            state.loading = true;
            state.error = null;

        }).addCase(sendMessage.fulfilled, (state, action) => {
           //// When API response is received
            state.loading = false;

            state.messages.push({
                id: Date.now(),
                sender: "ai",
                text: action.payload,
            });

        }).addCase(sendMessage.rejected, (state, action) => {
            // When API request fails
            state.loading = false;
            state.error = action.payload;

        });
    },
});

export const { addUserMessage } = chatSlice.actions;
export default chatSlice.reducer;