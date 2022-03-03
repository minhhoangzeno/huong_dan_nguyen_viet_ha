import { Controller, Get } from '@nestjs/common';
import { VoteUserService } from './vote-user.service';

@Controller('vote-user')
export class VoteUserController {
    constructor(private voteuserService: VoteUserService) { }

    @Get()
    async find(){
        return this.voteuserService.findAll();
    }
}
