import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { FeeUser } from 'src/fee-user/schemas/fee-user.schemas';

export type FeeDocument = Fee & Document;

@Schema()
export class Fee {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    time: Date;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FeeUser' }] })
    feeUsers: FeeUser[];


}

export const FeeSchema = SchemaFactory.createForClass(Fee);