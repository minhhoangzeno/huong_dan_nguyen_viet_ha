import { Model } from 'mongoose';
import { ProductCountDown, ProductCountDownDocument } from 'src/productcountdown/schemas/productcountdown.schemas';
import { CountDown, CountDownDocument } from './schemas/countdown.schemas';
export declare class CountdownService {
    private countdownModel;
    private productCountDownModel;
    constructor(countdownModel: Model<CountDownDocument>, productCountDownModel: Model<ProductCountDownDocument>);
    findAll(): Promise<CountDown[]>;
    findById(id: any): Promise<{
        total: number;
        products: (ProductCountDown & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    createCountdown(title: any, products: any): Promise<CountDown>;
    updateCountdown(title: any, products: any, id: any): Promise<CountDown>;
    removeCountdown(id: any): Promise<CountDown>;
}
