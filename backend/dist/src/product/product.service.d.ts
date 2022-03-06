import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.schemas';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    findAll(): Promise<Product[]>;
    createProduct(createProductDto: ProductDto, photoURL: string): Promise<Product>;
    deleteById(id: string): Promise<void>;
    updateById(id: string, updateProductDto: ProductDto, photoURL?: string): Promise<Product>;
}
