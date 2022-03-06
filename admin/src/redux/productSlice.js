import { createSlice } from '@reduxjs/toolkit';
import { addProduct, deleteProduct, detailProduct, editProduct, getProduct } from '../services/product.service';

const initialState = {
    data: null,
    error: null
};

export const productSlice = createSlice({
    name: 'product',
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
export const { setData, setError } = productSlice.actions;

// Define a thunk that dispatches those action creators
export const getProductThunk = () => async (dispatch) => {

    try {
        const data = await getProduct();
        dispatch(setData(data))

        return data;
    } catch (err) {
        dispatch(setError(err))
    }
    //done
}

export const addProductThunk = (data) => async (dispatch) => {
    try {
        let response = await addProduct(data);
        getProductThunk();
        return response;
    } catch (error) {
        console.log(error)
    }
}



export const editProductThunk = (productId, data) => async (dispatch) => {
    try {
        let response = await editProduct(productId, data);
        getProductThunk()
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const detailProductThunk = (data) => async () => {
    try {
        let response = await detailProduct(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export const deleteProductThunk = (data) => async () => {
    try {
        let response = await deleteProduct(data);
        return response
    } catch (error) {
        console.log(error)
    }
}
export default productSlice.reducer