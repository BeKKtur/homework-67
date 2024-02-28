import {createSlice} from "@reduxjs/toolkit";

interface CounterState {
    value: string
}

const initialState: CounterState = {
    value: ''
}



export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        one: (state) => {
                state.value += '1'
        },
        two: (state) => {
                state.value += '2';
        },
        three: (state) => {
                state.value += '3';
        },
        four: (state) => {
                state.value += '4';
        },
        five: (state) => {
                state.value += '5';
        },
        six: (state) => {
                state.value += '6';
        },
        seven: (state) => {
                state.value += '7';
        },
        eight: (state) => {
                state.value += '8';
        },
        nine: (state) => {
                state.value += '9';
        },
        zero: (state) => {
                state.value += '0';
        },

        remove: (state) => {
             state.value = state.value.slice(0, -1)
        },

        maxValue: (state) => {
            if (state.value.length > 4) {
                state.value = state.value.slice(0, 4)
            }
        }
    }
});

export const counterReducer = counterSlice.reducer;

export const {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    zero,
    remove,
    maxValue} = counterSlice.actions