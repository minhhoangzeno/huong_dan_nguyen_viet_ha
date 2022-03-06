import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.schemas';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async findAll(): Promise<Product[]> {
        return this.productModel.find({}).sort({ createdAt: -1 })
    }

    async createProduct(createProductDto: ProductDto, photoURL: string): Promise<Product> {
        let date = new Date();
        const product = new this.productModel({ ...createProductDto, photoURL, createdAt: date })
        return product.save();
    }

    async deleteById(id: string) {
        let product = await this.productModel.findById(id);
        if(product){
            product.remove()
        }
    }

    async updateById(id: string, updateProductDto: ProductDto, photoURL?: string): Promise<Product> {
        let product = await this.productModel.findById(id.toString())
        if (photoURL) {
            product.title = updateProductDto.title;
            product.author = updateProductDto.author;
            product.photoURL = photoURL;
            return product.save();
        } else {
            product.title = updateProductDto.title;
            product.author = updateProductDto.author;
            return product.save();
        }

    }

}
