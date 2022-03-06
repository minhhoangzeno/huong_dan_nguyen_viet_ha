"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schemas_1 = require("./schemas/product.schemas");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async findAll() {
        return this.productModel.find({}).sort({ createdAt: -1 });
    }
    async createProduct(createProductDto, photoURL) {
        let date = new Date();
        const product = new this.productModel(Object.assign(Object.assign({}, createProductDto), { photoURL, createdAt: date }));
        return product.save();
    }
    async deleteById(id) {
        let product = await this.productModel.findById(id);
        if (product) {
            product.remove();
        }
    }
    async updateById(id, updateProductDto, photoURL) {
        let product = await this.productModel.findById(id.toString());
        if (photoURL) {
            product.title = updateProductDto.title;
            product.author = updateProductDto.author;
            product.photoURL = photoURL;
            return product.save();
        }
        else {
            product.title = updateProductDto.title;
            product.author = updateProductDto.author;
            return product.save();
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schemas_1.Product.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map