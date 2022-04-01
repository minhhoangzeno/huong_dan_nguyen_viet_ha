import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';
import { ProductCountDown } from 'src/productcountdown/schemas/productcountdown.schemas';
import { User } from 'src/user/schemas/user.schemas';

export type CountDownDocument = CountDown & Document;

@Schema()
export class CountDown {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop()
    startDate: Date;

    @Prop()
    endDate: Date;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
    products: Product[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    votes: User[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCountDown' }] })
    total: ProductCountDown[];

    @Prop()
    createdAt: Date;
}

export const CountDownSchema = SchemaFactory.createForClass(CountDown);

