import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    getComment(typeId: string): unknown;
    createComment(body: CommentDto, req: any): unknown;
    removeCommentById(id: any): unknown;
    updateCommentById(id: any, body: any): unknown;
}
