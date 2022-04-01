import { Model } from 'mongoose';
import { VideoDocument } from 'src/video/schemas/video.schemas';
import { CommentDto } from './dto/comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schemas';
export declare class CommentService {
    private commentModel;
    private videoModel;
    constructor(commentModel: Model<CommentDocument>, videoModel: Model<VideoDocument>);
    getComment(typeId: string): Promise<(Comment & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addComment(createCommentDto: CommentDto, user: any): Promise<Comment>;
    deleteComment(commentId: string): Promise<Comment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateComment(commentId: string, title: string): Promise<Comment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
