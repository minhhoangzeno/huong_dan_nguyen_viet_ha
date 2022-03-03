import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type ProductDocument = Product & Document;
export declare class Product {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    author: string;
    photoURL: string;
    createdAt: Date;
}
export declare const ProductSchema: mongoose.Schema<Document<Product, any, any>, mongoose.Model<Document<Product, any, any>, any, any, any>, any, any>;
