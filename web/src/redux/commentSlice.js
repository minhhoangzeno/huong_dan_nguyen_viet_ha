import { createSlice } from '@reduxjs/toolkit';
import { addCommentByPost, deleteCommentByPost, editCommentByPost, getCommentByPost } from '../services/comment.service';

const initialState = {
    data: null,
    error: null
};

export const commentSlice = createSlice({
    name: 'comment',
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
export const { setData, setError } = commentSlice.actions;

// Define a thunk that dispatches those action creators
export const getCommentByPostThunk = (dto) => async (dispatch) => {

    try {
        const data = await getCommentByPost(dto);
        dispatch(setData(data))
        return data;
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}

export const addCommentByPostThunk = (data) => async (dispatch) => {
    try {
        let response = await addCommentByPost(data);
        getCommentByPostThunk();
        return response;
    } catch (error) {
        console.log(error)
    }
}



export const editCommentByPostThunk = (commentId, data) => async (dispatch) => {
    try {
        let response = await editCommentByPost(commentId, data);
        getCommentByPostThunk()
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const deleteCommentByPostThunk = (data) => async () => {
    try {
        let response = await deleteCommentByPost(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export default commentSlice.reducer