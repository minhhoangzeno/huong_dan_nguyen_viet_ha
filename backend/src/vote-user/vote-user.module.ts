import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountDown, CountDownSchema } from 'src/countdown/schemas/countdown.schemas';
import { Product, ProductSchema } from 'src/product/schemas/product.schemas';
import { ProductCountDown, ProductCountDownSchema } from 'src/productcountdown/schemas/productcountdown.schemas';
import { VoteUser, VoteUserSchema } from './schemas/vote-user.schemas';
import { VoteUserController } from './vote-user.controller';
import { VoteUserService } from './vote-user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: VoteUser.name, schema: VoteUserSchema }]),
    MongooseModule.forFeature([{ name: ProductCountDown.name, schema: ProductCountDownSchema }]),
    MongooseModule.forFeature([{ name: CountDown.name, schema: CountDownSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [VoteUserController],
  providers: [VoteUserService]
})
export class VoteUserModule {}
