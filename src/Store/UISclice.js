import { createSlice } from "@reduxjs/toolkit";

const INIUI = {
    isNavVisible : false,
    deleteStage : false,
    selectAll : false
}

const UiSlice =  createSlice({
    name: "uiSlice",
    initialState: INIUI,
    reducers : {
        toggleNevUi(state){
            state.isNavVisible = !state.isNavVisible;
        },
        cloaseNav(state){
            state.isNavVisible = false;
        },
        FalseDeleteStage(state){
            state.deleteStage = false;
        },
        TrueDeleteStage(state){
            state.deleteStage = true;
        },
        setSelectAll(state){
            state.selectAll = !state.selectAll;
        },
        FalseSelectAll(state){
            state.selectAll = false;
        }
    }
})

export const {toggleNevUi , cloaseNav, FalseDeleteStage, TrueDeleteStage, setSelectAll, FalseSelectAll} = UiSlice.actions;
export default UiSlice.reducer;