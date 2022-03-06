import { Body, Controller, Delete, Get, Param, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }


    @Get()
    async getProducts() {
        return this.productService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${(file.originalname)}`)
            }
        })
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: ProductDto) {
        return this.productService.createProduct(body, file.filename)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:id')
    async removeProduct(@Param('id') id) {
        return this.productService.deleteById(id)
    }

   
    @UseGuards(JwtAuthGuard)
    @Post('edit/:id')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${(file.originalname)}`)
            }
        })
    }))
    async updateProduct(@UploadedFile() file: Express.Multer.File, @Body() body: ProductDto, @Param('id') id) {
        if (file) {
            return this.productService.updateById(id, body, file.filename)
        } else {
            return this.productService.updateById(id, body)
        }
    }

}
