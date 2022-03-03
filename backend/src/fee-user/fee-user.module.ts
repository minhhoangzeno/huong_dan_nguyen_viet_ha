import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeeService } from 'src/fee/fee.service';
import { Fee, FeeSchema } from 'src/fee/schemas/fee.schemas';
import { User, UserSchema } from 'src/user/schemas/user.schemas';
import { FeeUserController } from './fee-user.controller';
import { FeeUserService } from './fee-user.service';
import { FeeUser, FeeUserSchema } from './schemas/fee-user.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: FeeUser.name, schema: FeeUserSchema }]), MongooseModule.forFeature([{ name: Fee.name, schema: FeeSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [FeeUserController],
  providers: [FeeUserService, FeeService]
})
export class FeeUserModule { }
