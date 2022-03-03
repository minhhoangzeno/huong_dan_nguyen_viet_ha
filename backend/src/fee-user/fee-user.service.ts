import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeeService } from 'src/fee/fee.service';
import { Fee, FeeDocument } from 'src/fee/schemas/fee.schemas';
import { User, UserDocument } from 'src/user/schemas/user.schemas';
import { FeeUser, FeeUserDocument } from './schemas/fee-user.schemas';
@Injectable()
export class FeeUserService {
    constructor(@InjectModel(FeeUser.name) private feeUserModel: Model<FeeUserDocument>,
        @InjectModel(Fee.name) private feeModel: Model<FeeDocument>,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private feeService: FeeService
    ) { }

    async findAll() {
        return this.feeUserModel.find().populate('fee', 'title', 'Fee')
    }
    async create(feeStr: string, userId) {
        let fee = await this.feeModel.findById(feeStr.toString());
        let user = await this.userModel.findById(userId.toString());
        let feeUser = new this.feeUserModel();
        feeUser.fee = fee._id;
        feeUser.user = user._id;
        fee.feeUsers.push(feeUser._id);
        fee.save();
        return feeUser.save();
    }
    async remove(id: string) {
        let feeUser = await this.feeUserModel.findById(id);
        return feeUser.remove();
    }

    async update(id: string) {
        let feeUser = await this.feeUserModel.findById(id);
        if (feeUser.status == "Pending") {
            feeUser.status = "Active"
        } else {
            feeUser.status = "Pending"
        }
        return feeUser.save()
    }

    async checkstatus(feeId, userId) {
        let feeUser = await this.feeUserModel.findOne({ fee: feeId.toString(), user: userId.toString() });
        return feeUser.status;
    }

    async upPhotoURLFee(photoURL: string, feeId, userId) {
        let feeUser = await this.feeUserModel.findOne({ fee: feeId.toString(), user: userId.toString() });
        feeUser.photoURL.push(photoURL);
        return feeUser.save();
    }


}
