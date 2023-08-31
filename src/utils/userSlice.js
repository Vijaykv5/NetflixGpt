import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice(
    {
        name:"user",
        initialState:null,
        reducers:{
            //All rducers
            addUser :(state,action)=>{
                return action.payload;
            },
            removeUser:(state)=>{
                return null;
            }
        }
    }
)

export default userSlice.reducer;
export const {addUser,removeUser}=userSlice.actions;