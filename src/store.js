import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./widgetSlice";

export default configureStore({
    reducer: {widgetReducer},
})