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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteUserSchema = exports.VoteUser = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_schemas_1 = require("../../user/schemas/user.schemas");
const productcountdown_schemas_1 = require("../../productcountdown/schemas/productcountdown.schemas");
let VoteUser = class VoteUser {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], VoteUser.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schemas_1.User)
], VoteUser.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCountDown' }),
    __metadata("design:type", productcountdown_schemas_1.ProductCountDown)
], VoteUser.prototype, "productCountDown", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], VoteUser.prototype, "createdAt", void 0);
VoteUser = __decorate([
    (0, mongoose_1.Schema)()
], VoteUser);
exports.VoteUser = VoteUser;
exports.VoteUserSchema = mongoose_1.SchemaFactory.createForClass(VoteUser);
//# sourceMappingURL=vote-user.schemas.js.map