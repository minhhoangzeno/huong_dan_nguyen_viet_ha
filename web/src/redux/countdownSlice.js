import { createSlice } from '@reduxjs/toolkit';
import { addCountdown, checkUserVoted, deleteCountdown, detailCountdown, editCountdown, getCountdown, userVoteCountdown } from '../services/countdown.service';

const initialState = {
    data: null,
    error: null
};

export const countdownSlice = createSlice({
    name: 'countdown',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.data = null
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setData, setError } = countdownSlice.actions;

// Define a thunk that dispatches those action creators
export const getCountdownThunk = () => async (dispatch) => {

    try {
        const data = await getCountdown();
        dispatch(setData(data))
        return data;
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}

export const addCountdownThunk = (data) => async (dispatch) => {
    try {
        let response = await addCountdown(data);
        getCountdownThunk();
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const voteUserCountdownThunk = (data) => async (dispatch) => {
    try {
        let response = await userVoteCountdown(data);
        return response;
    } catch (error) {
        console.log(error)
    }
}


export const checkVoteUserThunk = (data) => async (dispatch) => {
    try {
        let response = await checkUserVoted(data);
        return response;
    } catch (error) {
        console.log(error)
    }
}



export const editCountdownThunk = (countdownId, data) => async (dispatch) => {
    try {
        let response = await editCountdown(countdownId, data);
        getCountdownThunk()
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const detailCountdownThunk = (data) => async () => {
    try {
        let response = await detailCountdown(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export const deleteCountdownThunk = (data) => async () => {
    try {
        let response = await deleteCountdown(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export default countdownSlice.reducer