import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductCountDown, ProductCountDownDocument } from 'src/productcountdown/schemas/productcountdown.schemas';
import { CountDown, CountDownDocument } from './schemas/countdown.schemas';

@Injectable()
export class CountdownService {
    constructor(@InjectModel(CountDown.name) private countdownModel: Model<CountDownDocument>,
        @InjectModel(ProductCountDown.name) private productCountDownModel: Model<ProductCountDownDocument>
    ) { }

    async findAll(): Promise<CountDown[]> {
        return this.countdownModel.find({}).populate("products", "title", "Product").populate("total", "votes", "ProductCountDown")
    }

    async findById(id) {
        let countdown = await this.countdownModel.findById(id);
        let total = countdown.total.length;
        let products = await this.productCountDownModel.find({ '_id': { $in: [countdown.total] } }).populate("product", "title author photoURL", "Product");
        return { total, products }

    }

    async createCountdown(title, products): Promise<CountDown> {
        let date = new Date();
        const countdown = new this.countdownModel({ title, products, createdAt: date })
        return countdown.save();
    }

    async updateCountdown(title, products, id): Promise<CountDown> {
        let countdown = await this.countdownModel.findById(id.toString());
        countdown.title = title;
        countdown.products = products;
        return countdown.save();
    }

    async removeCountdown(id): Promise<CountDown> {
        let countdown = await this.countdownModel.findById(id.toString());
        return countdown.remove();
    }
}
