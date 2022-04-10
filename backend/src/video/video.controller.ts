import { Body, Controller, Delete, Get, Param, Post, Request, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { VideoService } from './video.service';
import { VideoDto } from './dto/video.dto';

@Controller('video')
export class VideoController {
    constructor(private videoService: VideoService) { }

    @Post('loadmore')
    async getBlogsLoadMore(@Body() body) {
        return this.videoService.loadMore(body.videoId)
    }

    @Get(':skipNumber')
    async getVideos(@Param('skipNumber') skipNumber) {
        return this.videoService.findAll(skipNumber)
    }

    @Get('home/:skipNumber')
    async getVideosByHome(@Param('skipNumber') skipNumber) {
        return this.videoService.findAllVideoByHome(skipNumber)
    }

    // @UseGuards(JwtAuthGuard)
    // @Post('create')
    // @UseInterceptors(FileInterceptor('file', {
    //     storage: diskStorage({
    //         destination: './uploads',
    //         filename: (req, file, cb) => {
    //             const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
    //             cb(null, `${randomName}${(file.originalname)}`)
    //         }
    //     })
    // }))
    // async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: VideoDto, @Request() req) {
    //     return this.videoService.createVideo(body, file.filename, req.user._doc.fullName)
    // }


    @UseGuards(JwtAuthGuard)
    @Post('create')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'file', maxCount: 1 },
        { name: 'videoURL', maxCount: 1 },
    ], {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${(file.originalname)}`)
            }
        })
    }))
    async uploadFile(@UploadedFiles() files: { file?: Express.Multer.File[], videoURL?: Express.Multer.File[] }, @Body() body: VideoDto, @Request() req) {
        return this.videoService.createVideo(body, files.file[0].filename, files.videoURL[0].filename, req.user._doc.fullName)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async removeBlog(@Param('id') id) {
        return this.videoService.deleteById(id)
    }

    @Get('detail/:id')
    async getBlogById(@Param('id') id) {
        return this.videoService.findById(id)
    }

    // @UseGuards(JwtAuthGuard)
    // @Post('edit/:id')
    // @UseInterceptors(FileInterceptor('file', {
    //     storage: diskStorage({
    //         destination: './uploads',
    //         filename: (req, file, cb) => {
    //             const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
    //             cb(null, `${randomName}${(file.originalname)}`)
    //         }
    //     })
    // }))
    // async updateBlog(@UploadedFile() file: Express.Multer.File, @Body() body: VideoDto, @Param('id') id) {
    //     if (file) {
    //         return this.videoService.updateById(id, body, file.filename)
    //     } else {
    //         return this.videoService.updateById(id, body)
    //     }
    // }

}
