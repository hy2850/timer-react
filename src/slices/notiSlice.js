import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    onNoti: false
}

export const notiSlice = createSlice({
    name: 'noti',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        turnOn: (state) => {
            state.onNoti = true;
        },
        turnOff: (state) => {
            state.onNoti = false;
        }
    }
});

export const { turnOn, turnOff } = notiSlice.actions;

export default notiSlice.reducer;