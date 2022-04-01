import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import { CountdownModule } from './countdown/countdown.module';
import { ProductModule } from './product/product.module';
import { ProductcountdownModule } from './productcountdown/productcountdown.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { VoteUserModule } from './vote-user/vote-user.module';
import { FeedbackModule } from './feedback/feedback.module';


@Module({
  imports: [UserModule,
    MongooseModule.forRoot('mongodb://localhost/nvh'),
    AuthModule,
    BlogModule,
    VideoModule,
    CommentModule,
    ProductModule,
    CountdownModule,
    ProductcountdownModule,
    VoteUserModule,
    FeedbackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
