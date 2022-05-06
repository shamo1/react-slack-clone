import { createSlice } from "@reduxjs/toolkit";
const name = "room";
const roomID = null;
export const AppSlice = createSlice({
  name: "app",
  initialState:{
    roomID : null
  },
  reducers:{
    enterRoom : (state,action)=>{
      state.roomID = action.payload.roomID;
    }
  }
});

export const  {enterRoom} = AppSlice.actions;

export const selectRoomID = (state) => state.app;


export default AppSlice.reducer;