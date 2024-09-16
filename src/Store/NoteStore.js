import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./SliceNotes";
import UISclice from "./UISclice";


const store = configureStore({
    reducer:{
        notes : notesSlice,
        uiSlice : UISclice,
    }
})

export default store;