import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      const { open, type, message } = action.payload;
      state.notification = {
        type,
        open,
        message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
