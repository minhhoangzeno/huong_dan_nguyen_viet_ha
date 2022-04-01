import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type VideoDocument = Video & Document;
export declare class Video {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    content: string;
    metaDescription: string;
    photoURL: string;
    videoURL: string;
    createdBy: string;
    createdAt: Date;
}
export declare const VideoSchema: mongoose.Schema<Document<Video, any, any>, mongoose.Model<Document<Video, any, any>, any, any, any>, any, any>;
