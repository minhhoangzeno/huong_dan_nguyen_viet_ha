import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountDown, CountDownSchema } from 'src/countdown/schemas/countdown.schemas';
import { VoteUser, VoteUserSchema } from 'src/vote-user/schemas/vote-user.schemas';
import { ProductcountdownController } from './productcountdown.controller';
import { ProductcountdownService } from './productcountdown.service';
import { ProductCountDown, ProductCountDownSchema } from './schemas/productcountdown.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProductCountDown.name, schema: ProductCountDownSchema }]),
    MongooseModule.forFeature([{ name: CountDown.name, schema: CountDownSchema }]),
    MongooseModule.forFeature([{ name: VoteUser.name, schema: VoteUserSchema }])
  ],
  controllers: [ProductcountdownController],
  providers: [ProductcountdownService]
})
export class ProductcountdownModule {}
