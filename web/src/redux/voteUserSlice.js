import { createSlice } from '@reduxjs/toolkit';
import { getHistoryVoteUser } from '../services/vote-user.service';

const initialState = {
    data: null,
    error: null
};

export const voteUserSlice = createSlice({
    name: 'voteUser',
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
export const { setData, setError } = voteUserSlice.actions;

// Define a thunk that dispatches those action creators
export const getHistoryVoteUserThunk = () => async (dispatch) => {

    try {
        const data = await getHistoryVoteUser();
        dispatch(setData(data))
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}



export default voteUserSlice.reducer