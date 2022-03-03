import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/product/schemas/product.schemas';
import { CountDown } from 'src/countdown/schemas/countdown.schemas';
import { User } from 'src/user/schemas/user.schemas';
import { ProductCountDown } from 'src/productcountdown/schemas/productcountdown.schemas';

export type VoteUserDocument = VoteUser & Document;

@Schema()
export class VoteUser {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCountDown' }] })
    votes: ProductCountDown[];

    @Prop()
    createdAt: Date;
}

export const VoteUserSchema = SchemaFactory.createForClass(VoteUser);