import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store/store";

interface sideBarState {
    value: boolean
}

// Define the initial state using that type
const initialState: sideBarState = {
    value: true,
}

export const sideBarToggleSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers:{
        switchState:(state)=>{
            state.value = !state.value;
        },
        setSideBarState(state,action:PayloadAction<boolean>){
            state.value = action.payload;
        }
    },
})
export const {switchState,setSideBarState} = sideBarToggleSlice.actions;
export const selectSideBarState = (state:RootState)=> state.sidebar.value;
export const sideBarReducer=sideBarToggleSlice.reducer;
export default sideBarToggleSlice.reducer;