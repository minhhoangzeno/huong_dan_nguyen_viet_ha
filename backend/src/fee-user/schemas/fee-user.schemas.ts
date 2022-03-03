import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schemas';
import { Fee } from 'src/fee/schemas/fee.schemas';

export type FeeUserDocument = FeeUser & Document;

@Schema()
export class FeeUser {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Fee' })
    fee: Fee;

    @Prop({ default: 'Pending' })
    status: string;

    @Prop()
    photoURL: string[];

    @Prop()
    createdAt: Date;
}

export const FeeUserSchema = SchemaFactory.createForClass(FeeUser);