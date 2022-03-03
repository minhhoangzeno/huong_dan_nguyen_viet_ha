import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ProductcountdownService } from './productcountdown.service';

@Controller('productcountdown')
export class ProductcountdownController {
    constructor(private productcountdownService: ProductcountdownService) { }


    @Get()
    async getProductCountdowns() {
        return this.productcountdownService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createCountdown(@Body() body, @Request() req) {
        return this.productcountdownService.createProductCountdown(body.countdown, req.user._doc._id, body.product);
    }
}
