import { HttpException, Injectable } from '@nestjs/common';
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
        let countdownDb = await this.countdownModel.findById(countdown);
        if (countdownDb.votes.includes(user)) {
            throw new HttpException('Error', 201)
        } else {
            countdownDb.votes.push(user);
            countdownDb.save();
            const productcountdown = await this.productcountdownModel.findOne({ countdown, product });
            if (productcountdown) {
                productcountdown.votes.push(user);
                let voteUser = new this.voteUserModel({
                    createdAt: new Date(),
                    user: user,
                    productCountDown: productcountdown._id
                })
                voteUser.save();
                return productcountdown.save();
            }
        }
    }

    async checkUserVoted(countdownId, userId) {
        let countdown = await this.countdownModel.findById(countdownId);
        if (countdown.votes.includes(userId)) {
            return true
        } else {
            return false
        }
    }

}
