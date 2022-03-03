import { Body, Controller, Get, Param, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { FeeUserService } from './fee-user.service';

@Controller('fee-user')
export class FeeUserController {
    constructor(private feeUserService: FeeUserService) { }

    @Get()
    async findAll() {
        return this.feeUserService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() body, @Request() req) {
        return this.feeUserService.create(body.fee, req.user._doc._id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('status/:feeUserId')
    async update(@Param('feeUserId') feeUserId: string) {
        return this.feeUserService.update(feeUserId)
    }

    @UseGuards(JwtAuthGuard)
    @Post('check/status')
    async checkstatus(@Body() body, @Request() req) {
        return this.feeUserService.checkstatus(body.feeId, req.user._doc._id)
    }

    @UseGuards(JwtAuthGuard)
    @Post('uploadFileFee')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${(file.originalname)}`)
            }
        })
    }))
    async updateUser(@UploadedFile() file: Express.Multer.File, @Body() body, @Request() req) {
        return this.feeUserService.upPhotoURLFee(file.filename, body.feeId, req.user._doc._id)
    }
}
