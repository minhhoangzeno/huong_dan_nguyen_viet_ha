import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./progressSlice";
import blogReducer from './blogSlice';
import authReducer from './authSlice';
import videoReducer from './videoSlice';
import productReducer from './productSlice';
import countdownReducer from './countdownSlice';
import dashboardReducer from './dashboardSlice';
import userReducer from './userSlice';
import voteUserReducer from './voteUserSlice'
import feedbackReducer from './feedbackSlice';
import commentReducer from './commentSlice';
//USE TOOLKIT
const rootReducer = {
    reducer: {
        progress: progressReducer,
        blog: blogReducer,
        auth: authReducer,
        video: videoReducer,
        product: productReducer,
        countdown: countdownReducer,
        dashboard: dashboardReducer,
        user: userReducer,
        voteUser: voteUserReducer,
        feedback: feedbackReducer,
        comment: commentReducer
    },
};

export const store = configureStore(rootReducer);
