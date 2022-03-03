import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VoteUser, VoteUserDocument } from './schemas/vote-user.schemas';

@Injectable()
export class VoteUserService {
    constructor(@InjectModel(VoteUser.name) private voteUserModel: Model<VoteUserDocument>) { }

    async findAll(){
        return this.voteUserModel.find();
    }

}
