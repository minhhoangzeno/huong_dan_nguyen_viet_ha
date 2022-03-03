import { Model } from 'mongoose';
import { VoteUserDocument } from './schemas/vote-user.schemas';
export declare class VoteUserService {
    private voteUserModel;
    constructor(voteUserModel: Model<VoteUserDocument>);
    findAll(): unknown;
}
