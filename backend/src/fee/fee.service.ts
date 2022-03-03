import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeeUser, FeeUserDocument } from 'src/fee-user/schemas/fee-user.schemas';
import { User, UserDocument } from 'src/user/schemas/user.schemas';
import { Fee, FeeDocument } from './schemas/fee.schemas';

@Injectable()
export class FeeService {
    constructor(@InjectModel(Fee.name) private feeModel: Model<FeeDocument>,
        @InjectModel(FeeUser.name) private feeUserModel: Model<FeeUserDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) { }

    async findAll() {
        return this.feeModel.find()
    }

    async findById(id) {
        let fee = await this.feeModel.findById(id);
        let feeUsers = await this.feeUserModel.find({ fee: fee?._id }).populate("user", "email username", "User");
        return feeUsers;

    }

    async create(body) {
        let fee = new this.feeModel({ title: body.title, time: body.time });
        let users = await this.userModel.find({ status: 'Active' });
        users.forEach(user => {
            let feeUser = new this.feeUserModel({
                user: user._id,
                fee: fee._id
            })
            fee.feeUsers.push(feeUser._id)
            feeUser.save();
        })
        return fee.save();
    }
    async remove(id: string) {
        let fee = await this.feeModel.findById(id);
        return fee.remove();
    }

    async pushFeeUser(feeId: string, feeUser) {
        let fee = await this.feeModel.findById(feeId);
        fee.feeUsers.push(feeUser);
        fee.save();
    }
}
