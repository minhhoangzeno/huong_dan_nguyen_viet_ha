import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VoteUser, VoteUserSchema } from './schemas/vote-user.schemas';
import { VoteUserController } from './vote-user.controller';
import { VoteUserService } from './vote-user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: VoteUser.name, schema: VoteUserSchema }]),
  ],
  controllers: [VoteUserController],
  providers: [VoteUserService]
})
export class VoteUserModule {}
