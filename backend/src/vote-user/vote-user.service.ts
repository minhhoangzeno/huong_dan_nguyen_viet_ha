import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductCountDown, ProductCountDownDocument } from 'src/productcountdown/schemas/productcountdown.schemas';
import { VoteUser, VoteUserDocument } from './schemas/vote-user.schemas';

@Injectable()
export class VoteUserService {
    constructor(@InjectModel(VoteUser.name) private voteUserModel: Model<VoteUserDocument>,
        @InjectModel(ProductCountDown.name) private productCountdownModel: Model<ProductCountDownDocument>
    ) { }

    async findAll() {
        let data = await this.voteUserModel.aggregate([
            {
                $group: {
                    _id: "$user",
                    totalVote: { $sum: 1 },
                },
            }
        ])
        let resp = data.sort((a, b) => b.totalVote - a.totalVote);
        return this.voteUserModel.populate(resp, { path: '_id', select: 'fullName photoURL', model: 'User' })

    }

    async findById(userId) {
        let voteUsers = await this.voteUserModel.find({ user: userId }).populate(
            {
                path: "productCountDown",
                select: "product countdown title",
                model: "ProductCountDown",
                populate: {
                    path: "product",
                    select: "title author",
                    model: "Product"
                },
            });
        return voteUsers;
    }

}
