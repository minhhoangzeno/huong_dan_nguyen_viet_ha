import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { FeeService } from './fee.service';

@Controller('fee')
export class FeeController {
    constructor(private feeService: FeeService) { }

    @Get()
    async findAll() {
        return this.feeService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get('detail/:feeId')
    async find(@Param('feeId') feeId: string) {
        return this.feeService.findById(feeId)
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() body) {
        return this.feeService.create(body)
    }
    @Post('remove/:feeId')
    async remove(@Param('feeId') feeId: string) {
        return this.feeService.remove(feeId)
    }
}
