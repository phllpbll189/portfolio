import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Ypos: window.innerHeight + window.scrollY
}

export const scrollSlice = createSlice({
    name: 'sroll',
    initialState,
    reducers: {
        update: (state, action) => {
            state.Ypos = window.innerHeight + window.scrollY
        },
    },
})

export const {update, } = scrollSlice.actions
export default scrollSlice.reducer