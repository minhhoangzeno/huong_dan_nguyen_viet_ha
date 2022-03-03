import { ReplyDto } from './dto/reply.dto';
import { ReplyService } from './reply.service';
export declare class ReplyController {
    private replyService;
    constructor(replyService: ReplyService);
    getReplyByCommentId(commentId: any): unknown;
    addReplyCommentId(body: ReplyDto, req: any): unknown;
    removeReplyById(id: any): unknown;
    updateReplyById(id: any, body: any): unknown;
}
