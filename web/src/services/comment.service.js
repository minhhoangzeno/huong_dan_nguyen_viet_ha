import { privateDeleteApi, privatePostApi, publicGetApi } from "../apis/API";

export const getCommentByPost = async (data) => {
    let response = await publicGetApi(`/comment/${data}`)
    return response
};

export const addCommentByPost = async (data) => {
    let response = await privatePostApi('/comment/create', data)
    return response
};

export const editCommentByPost = async (blogId, data) => {
    let response = await privatePostApi(`/comment/edit/${blogId}`, data)
    return response
};

export const deleteCommentByPost = async (data) => {
    let response = await privateDeleteApi(`/comment/remove/${data}`)
    return response
};
