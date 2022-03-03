import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';
import { ProductCountDown } from 'src/productcountdown/schemas/productcountdown.schemas';

export type CountDownDocument = CountDown & Document;

@Schema()
export class CountDown {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop()
    time: Date;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
    products: Product[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCountDown' }] })
    total: ProductCountDown[];

    @Prop()
    createdAt: Date;
}

export const CountDownSchema = SchemaFactory.createForClass(CountDown);