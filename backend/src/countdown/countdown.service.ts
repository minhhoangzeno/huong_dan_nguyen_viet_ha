import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/product/schemas/product.schemas';
import { ProductCountDown, ProductCountDownDocument } from 'src/productcountdown/schemas/productcountdown.schemas';
import { CountDown, CountDownDocument } from './schemas/countdown.schemas';

@Injectable()
export class CountdownService {
    constructor(@InjectModel(CountDown.name) private countdownModel: Model<CountDownDocument>,
        @InjectModel(ProductCountDown.name) private productCountDownModel: Model<ProductCountDownDocument>,
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ) { }

    async findAll(): Promise<CountDown[]> {
        return this.countdownModel.find({}).populate("products", "title", "Product").populate("total", "votes", "ProductCountDown")
    }

    async findByDate() {
        let date = new Date();
        return this.countdownModel.find({
            "startDate": {
                "$lt": date
            },
            "endDate": {
                "$gte": date
            }
        }).populate("products", "title", "Product").populate("total", "votes", "ProductCountDown")
    }

    async findById(id) {
        let countdown = await this.countdownModel.findById(id.toString());
        let productcountdowns = await this.productCountDownModel.find({ countdown: countdown._id }).populate("product", "title author photoURL", "Product");
        let total = 0;
        productcountdowns.forEach(item => {
            total += item.votes.length
        });
        let sortProducts = productcountdowns.sort((a, b) => b.votes.length - a.votes.length)
        return {
            total,
            countdown,
            products: sortProducts

        }
    }

    async findCountDownHomeById(id) {
        let countdown = await this.countdownModel.findById(id.toString());
        let productcountdowns = await this.productCountDownModel.find({ countdown: countdown._id }).populate("product", "title author photoURL", "Product");
        let total = 0;
        productcountdowns.forEach(item => {
            total += item.votes.length
        });
        let sortProducts = productcountdowns.sort((a, b) => b.votes.length - a.votes.length);

        return {
            total,
            countdown,
            products: [sortProducts[0], sortProducts[1], sortProducts[2], sortProducts[3], sortProducts[4]]

        }
    }

    async createCountdown(title, startDate, endDate, products): Promise<CountDown> {
        let date = new Date();
        const countdown = new this.countdownModel({ title, startDate, endDate, products, createdAt: date });
        products.forEach(item => {
            let productcountdown = new this.productCountDownModel({
                countdown: countdown._id,
                product: item,
                title: countdown.title,
                votes: []
            })
            productcountdown.save();
            countdown.total.push(productcountdown._id);
        })

        return countdown.save();
    }

    async updateCountdown(title, startDate, endDate, products, id): Promise<CountDown> {
        let countdown = await this.countdownModel.findById(id.toString());
        countdown.title = title;
        countdown.startDate = startDate;
        countdown.endDate = endDate;
        countdown.products = products;
        return countdown.save();
    }

    async removeCountdown(id): Promise<CountDown> {
        let countdown = await this.countdownModel.findById(id.toString());
        return countdown.remove();
    }

    async sortCountdown(id) {
        let countdown = await this.countdownModel.findById(id);

    }
}
