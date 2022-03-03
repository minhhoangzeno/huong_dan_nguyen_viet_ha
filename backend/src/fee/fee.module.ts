import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeeUser, FeeUserSchema } from 'src/fee-user/schemas/fee-user.schemas';
import { User, UserSchema } from 'src/user/schemas/user.schemas';
import { FeeController } from './fee.controller';
import { FeeService } from './fee.service';
import { Fee, FeeSchema } from './schemas/fee.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Fee.name, schema: FeeSchema }]),
  MongooseModule.forFeature([{ name: FeeUser.name, schema: FeeUserSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
],
  controllers: [FeeController],
  providers: [FeeService]
})
export class FeeModule { }
