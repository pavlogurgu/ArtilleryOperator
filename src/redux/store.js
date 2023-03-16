import { configureStore } from "@reduxjs/toolkit";
import { battleReducer } from "./battleSlice";


export const store = configureStore({
  reducer: {
    battle: battleReducer,
  },
});




