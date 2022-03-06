import { privateDeleteApi, privatePostApi, publicGetApi } from "../apis/API";

export const getProduct = async () => {
    let response = await publicGetApi('/product')
    return response
};

export const addProduct = async (data) => {
    let response = await privatePostApi('/product/create', data)
    return response
};

export const editProduct = async (productId, data) => {
    let response = await privatePostApi(`/product/edit/${productId}`, data)
    return response
};
export const detailProduct = async (data) => {
    let response = await publicGetApi(`/product/detail/${data}`);
    return response;
}

export const deleteProduct = async (data) => {
    let response = await privateDeleteApi(`/product/delete/${data}`)
    return response
};
