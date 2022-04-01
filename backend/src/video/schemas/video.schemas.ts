import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type VideoDocument = Video & Document;

@Schema()
export class Video {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    metaDescription: string;

    @Prop()
    photoURL: string;

    @Prop({ index: true ,unique:true, sparse:true})
    videoURL: string;

    @Prop()
    createdBy: string;

    @Prop()
    createdAt: Date;
}

export const VideoSchema = SchemaFactory.createForClass(Video);