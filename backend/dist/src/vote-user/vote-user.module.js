"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteUserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const vote_user_schemas_1 = require("./schemas/vote-user.schemas");
const vote_user_controller_1 = require("./vote-user.controller");
const vote_user_service_1 = require("./vote-user.service");
let VoteUserModule = class VoteUserModule {
};
VoteUserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: vote_user_schemas_1.VoteUser.name, schema: vote_user_schemas_1.VoteUserSchema }]),
        ],
        controllers: [vote_user_controller_1.VoteUserController],
        providers: [vote_user_service_1.VoteUserService]
    })
], VoteUserModule);
exports.VoteUserModule = VoteUserModule;
//# sourceMappingURL=vote-user.module.js.map