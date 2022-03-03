import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CountdownService } from './countdown.service';

@Controller('countdown')
export class CountdownController {
    constructor(private countdownService: CountdownService) { }


    @Get()
    async getCountdowns() {
        return this.countdownService.findAll()
    }

    @Get(':id')
    async getDetail(@Param('id') id) {
        return this.countdownService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createCountdown(@Body() body) {
        return this.countdownService.createCountdown(body.title, body.products);
    }

    @UseGuards(JwtAuthGuard)
    @Post('update/:id')
    async updateCountdown(@Param('id') id, @Body() body) {
        return this.countdownService.updateCountdown(body.title, body.products, id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('remove/:id')
    async removeCountdown(@Param('id') id) {
        return this.countdownService.removeCountdown(id);
    }


}
