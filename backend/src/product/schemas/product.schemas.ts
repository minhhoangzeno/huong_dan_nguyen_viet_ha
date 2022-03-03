import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    author: string;

    @Prop()
    photoURL: string;

    @Prop()
    createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);