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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountDownSchema = exports.CountDown = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let CountDown = class CountDown {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_c = typeof mongoose !== "undefined" && (_a = mongoose.Schema) !== void 0 && (_b = _a.Types) !== void 0 && _b.ObjectId) === "function" ? _c : Object)
], CountDown.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CountDown.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], CountDown.prototype, "time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] }),
    __metadata("design:type", Array)
], CountDown.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCountDown' }] }),
    __metadata("design:type", Array)
], CountDown.prototype, "total", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], CountDown.prototype, "createdAt", void 0);
CountDown = __decorate([
    (0, mongoose_1.Schema)()
], CountDown);
exports.CountDown = CountDown;
exports.CountDownSchema = mongoose_1.SchemaFactory.createForClass(CountDown);
//# sourceMappingURL=countdown.schemas.js.map