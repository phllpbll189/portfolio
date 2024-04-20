import { createSlice } from "@reduxjs/toolkit";

export const widgetSlice = createSlice({
    name: "widget",
    initialState:{
        widget: "s"
    },
    reducers:{
        closeWidget: (state) => {
            state.widget = null
        },
        openWidget: (state, action) => {
            state.widget = action.payload
        },
    },
})

export const { closeWidget, openWidget } = widgetSlice.actions
export default widgetSlice.reducer