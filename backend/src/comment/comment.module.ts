import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reply, ReplySchema } from 'src/reply/schemas/reply.schemas';
import { Video, VideoSchema } from 'src/video/schemas/video.schemas';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment, CommentSchema } from './schemas/comment.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  MongooseModule.forFeature([{ name: Reply.name, schema: ReplySchema }]),
  MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
  ],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule { }
