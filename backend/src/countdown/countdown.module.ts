import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/product/schemas/product.schemas';
import { ProductCountDown, ProductCountDownSchema } from 'src/productcountdown/schemas/productcountdown.schemas';
import { CountdownController } from './countdown.controller';
import { CountdownService } from './countdown.service';
import { CountDown, CountDownSchema } from './schemas/countdown.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: CountDown.name, schema: CountDownSchema }]),
  MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  MongooseModule.forFeature([{ name: ProductCountDown.name, schema: ProductCountDownSchema }])
],
  controllers: [CountdownController],
  providers: [CountdownService]
})
export class CountdownModule {}
