import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';
import { CountDown } from 'src/countdown/schemas/countdown.schemas';
import { User } from 'src/user/schemas/user.schemas';

export type ProductCountDownDocument = ProductCountDown & Document;

@Schema()
export class ProductCountDown {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop()
    title: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'CountDown' })
    countdown: CountDown;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    votes: User[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    product: Product;

  

    @Prop()
    createdAt: Date;
}

export const ProductCountDownSchema = SchemaFactory.createForClass(ProductCountDown);