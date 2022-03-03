import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CountDown, CountDownDocument } from 'src/countdown/schemas/countdown.schemas';
import { VoteUser, VoteUserDocument } from 'src/vote-user/schemas/vote-user.schemas';
import { ProductCountDown, ProductCountDownDocument } from './schemas/productcountdown.schemas';

@Injectable()
export class ProductcountdownService {
    constructor(@InjectModel(ProductCountDown.name) private productcountdownModel: Model<ProductCountDownDocument>,
        @InjectModel(CountDown.name) private countdownModel: Model<CountDownDocument>,
        @InjectModel(VoteUser.name) private voteUserModel: Model<VoteUserDocument>
    ) { }

    async findAll(): Promise<ProductCountDown[]> {
        return this.productcountdownModel.find({})
    }

    async createProductCountdown(countdown, user, product): Promise<ProductCountDown> {
        let date = new Date();
        const productcountdown = new this.productcountdownModel({ countdown, product, createdAt: date });

        productcountdown.votes.push(user);
        let countdownProduct = await this.countdownModel.findById(countdown.toString());
        let voteUser = await this.voteUserModel.findOne({ user: user.toString() });
        if (voteUser) {
            voteUser.votes.push(productcountdown._id);
            voteUser.save();
        } else {
            let date = new Date();
            let createVoteUser = new this.voteUserModel({ user: user, votes: [productcountdown._id], createdAt: date });
            createVoteUser.save();
        }

        if (countdownProduct) {
            countdownProduct.total.push(productcountdown._id);
            countdownProduct.save();
        }
        return productcountdown.save();
    }

}
