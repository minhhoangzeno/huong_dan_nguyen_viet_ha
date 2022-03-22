import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { VoteUserService } from './vote-user.service';

@Controller('vote-user')
export class VoteUserController {
    constructor(private voteuserService: VoteUserService) { }

    @Get()
    async find() {
        return this.voteuserService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('history')
    async findById(@Request() req) {
        return this.voteuserService.findById(req.user._doc._id);
    }
}
