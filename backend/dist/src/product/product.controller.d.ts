/// <reference types="multer" />
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProducts(): Promise<import("./schemas/product.schemas").Product[]>;
    uploadFile(file: Express.Multer.File, body: ProductDto, req: any): Promise<import("./schemas/product.schemas").Product>;
    removeProduct(id: any): Promise<void>;
    updateProduct(file: Express.Multer.File, body: ProductDto, id: any): Promise<import("./schemas/product.schemas").Product>;
}
