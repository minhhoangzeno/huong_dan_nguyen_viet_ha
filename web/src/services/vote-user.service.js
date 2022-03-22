import { privateGetApi } from "../apis/API";

export const getHistoryVoteUser = async () => {
    let response = await privateGetApi('/vote-user/history')
    return response
};

