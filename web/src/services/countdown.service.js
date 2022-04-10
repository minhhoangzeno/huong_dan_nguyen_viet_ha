import { privateDeleteApi, privatePostApi, publicGetApi } from "../apis/API";

export const getCountdown = async () => {
    let response = await publicGetApi('/countdown/byDate')
    return response
};

export const addCountdown = async (data) => {
    let response = await privatePostApi('/countdown/create', data)
    return response
};

export const editCountdown = async (blogId, data) => {
    let response = await privatePostApi(`/countdown/edit/${blogId}`, data)
    return response
};
export const detailCountdown = async (data) => {
    let response = await publicGetApi(`/countdown/detail/${data}`);
    return response;
}

export const detailCountdownHome = async (data) => {
    let response = await publicGetApi(`/countdown/detail-home/${data}`);
    return response;
}

export const deleteCountdown = async (data) => {
    let response = await privateDeleteApi(`/countdown/delete/${data}`)
    return response
};

export const userVoteCountdown = async (data) => {
    let response = await privatePostApi('/productcountdown/create', data);
    return response;
}


export const checkUserVoted = async (data) => {
    let response = await privatePostApi('/productcountdown/voted/user', data);
    return response;
}