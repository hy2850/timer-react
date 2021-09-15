import { createSlice } from '@reduxjs/toolkit';

// Status of short timer (on/off)
const initialState = {
    isShortOn: false
}

export const shrtOnSlice = createSlice({
    name: 'shortOn',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        turnOn: (state) => {
            state.isShortOn = true;
        },
        turnOff: (state) => {
            state.isShortOn = false;
        }
    }
});

export const { turnOn, turnOff } = shrtOnSlice.actions;

export default shrtOnSlice.reducer;