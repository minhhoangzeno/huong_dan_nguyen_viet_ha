import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CountdownService } from './countdown.service';

@Controller('countdown')
export class CountdownController {
    constructor(private countdownService: CountdownService) { }


    @Get()
    async getCountdowns() {
        return this.countdownService.findAll()
    }

    @Get('detail/:id')
    async getDetail(@Param('id') id) {
        return this.countdownService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createCountdown(@Body() body) {
        return this.countdownService.createCountdown(body.title,body.time, body.products);
    }

    @UseGuards(JwtAuthGuard)
    @Post('edit/:id')
    async updateCountdown(@Param('id') id, @Body() body) {
        return this.countdownService.updateCountdown(body.title,body.time, body.products, id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async removeCountdown(@Param('id') id) {
        return this.countdownService.removeCountdown(id);
    }


}
