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
        const productcountdown = await this.productcountdownModel.findOne({ countdown, product });
        if (productcountdown) {
            productcountdown.votes.push(user);
            let voteUser = new this.voteUserModel({
                createdAt: new Date(),
                user:user,
                productCountDown: productcountdown._id
            })
            voteUser.save();
            // let voteUser = await this.voteUserModel.findOne({ user: user.toString() });
            // if (voteUser) {
            //     let date = new Date();
            //     voteUser.createdAt.push(date)
            //     voteUser.votes.push(productcountdown._id);
            //     voteUser.save();
            // } else {
            //     let date = new Date();
            //     let createVoteUser = new this.voteUserModel({ user: user, votes: [productcountdown._id] });
            //     createVoteUser.createdAt.push(date)
            //     createVoteUser.save();
            // }
            return productcountdown.save();
        }
    }

    async checkUserVoted(countdownId, productId, userId) {
        let productcountdown = await this.productcountdownModel.findOne({
            countdown: countdownId,
            product: productId
        });
        if (productcountdown) {
            if (productcountdown.votes.includes(userId)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

}
