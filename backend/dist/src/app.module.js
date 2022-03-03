"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const blog_module_1 = require("./blog/blog.module");
const comment_module_1 = require("./comment/comment.module");
const countdown_module_1 = require("./countdown/countdown.module");
const product_module_1 = require("./product/product.module");
const productcountdown_module_1 = require("./productcountdown/productcountdown.module");
const reply_module_1 = require("./reply/reply.module");
const user_module_1 = require("./user/user.module");
const video_module_1 = require("./video/video.module");
const vote_user_module_1 = require("./vote-user/vote-user.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule,
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/nvh'),
            auth_module_1.AuthModule,
            blog_module_1.BlogModule,
            video_module_1.VideoModule,
            comment_module_1.CommentModule,
            reply_module_1.ReplyModule,
            product_module_1.ProductModule,
            countdown_module_1.CountdownModule,
            productcountdown_module_1.ProductcountdownModule,
            vote_user_module_1.VoteUserModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map