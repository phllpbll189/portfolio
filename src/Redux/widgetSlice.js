import { createSlice } from "@reduxjs/toolkit";


export const widgetSlice = createSlice({
    name: "widget",
    initialState:{
        widget: ""
    },
    reducers:{
        closeWidget: (state) => {
            state.widget = ""
        },
        openWidget: (state, action) => {
            console.log("in widget slice openwidget" + JSON.stringify(action))
            state.widget = action.payload
        },
    },
})

export const { closeWidget, openWidget } = widgetSlice.actions
export default widgetSlice.reducer