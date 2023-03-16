import { createSlice } from "@reduxjs/toolkit";
import { cells } from "../components/Grid/fieldSquares";

const battleInitialState = [
    cells
]


const battleSlice = createSlice({
    name: "battle",
    initialState: battleInitialState,
    reducers:{
        makeShot:{
            reducer(state, action){
                for (const cell of state) {
                    if (cell.id === action.payload) {
                      cell.enemyHealth = 0;
                      break;
                    }
                  }
            }
        }
    }
})
export const { makeShot } = battleSlice.actions;
export const battleReducer = battleSlice.reducer;