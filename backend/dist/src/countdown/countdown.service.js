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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountdownService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const productcountdown_schemas_1 = require("../productcountdown/schemas/productcountdown.schemas");
const countdown_schemas_1 = require("./schemas/countdown.schemas");
let CountdownService = class CountdownService {
    constructor(countdownModel, productCountDownModel) {
        this.countdownModel = countdownModel;
        this.productCountDownModel = productCountDownModel;
    }
    async findAll() {
        return this.countdownModel.find({}).populate("products", "title", "Product").populate("total", "votes", "ProductCountDown");
    }
    async findById(id) {
        let countdown = await this.countdownModel.findById(id);
        let total = countdown.total.length;
        let products = await this.productCountDownModel.find({ '_id': { $in: [countdown.total] } }).populate("product", "title author photoURL", "Product");
        return { total, products };
    }
    async createCountdown(title, products) {
        let date = new Date();
        const countdown = new this.countdownModel({ title, products, createdAt: date });
        return countdown.save();
    }
    async updateCountdown(title, products, id) {
        let countdown = await this.countdownModel.findById(id.toString());
        countdown.title = title;
        countdown.products = products;
        return countdown.save();
    }
    async removeCountdown(id) {
        let countdown = await this.countdownModel.findById(id.toString());
        return countdown.remove();
    }
};
CountdownService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(countdown_schemas_1.CountDown.name)),
    __param(1, (0, mongoose_1.InjectModel)(productcountdown_schemas_1.ProductCountDown.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], CountdownService);
exports.CountdownService = CountdownService;
//# sourceMappingURL=countdown.service.js.map