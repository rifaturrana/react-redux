// import { createStore } from "redux";

// const reducer = (state = { counter: 0 }, action) => {
//   //Syncronous Function
//   // We should not mutate the original state

//   if (action.type === "INC") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "DEC") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "ADD") {
//     return {
//       counter: state.counter + action.payload,
//     };
//   }

//   return state;
// };

// const store = createStore(reducer);
// export default store;

/********  Using redux toolkit **** */

import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increament(state, action) {
      state.counter++;
    },
    decreament(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
