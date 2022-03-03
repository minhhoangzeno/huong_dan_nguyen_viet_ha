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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_service_1 = require("../comment/comment.service");
const video_schemas_1 = require("./schemas/video.schemas");
let VideoService = class VideoService {
    constructor(videoModel, commentService) {
        this.videoModel = videoModel;
        this.commentService = commentService;
    }
    async findAll() {
        return this.videoModel.find();
    }
    async createVideo(createVideo, photoURL, fullName) {
        let date = new Date();
        const video = new this.videoModel(Object.assign(Object.assign({}, createVideo), { photoURL, createdAt: date, createdBy: fullName }));
        return video.save();
    }
    async deleteById(id) {
        let video = await this.videoModel.findById(id);
        let comments = await this.commentService.getComment(video._id);
        comments.forEach(comment => this.commentService.deleteComment(comment._id.toString()));
        video.remove();
    }
    async updateById(id, videoDto, photoURL) {
        let video = await this.videoModel.findById(id.toString());
        if (photoURL) {
            video.videoUrl = videoDto.videoUrl;
            video.title = videoDto.title;
            video.photoURL = photoURL;
            return video.save();
        }
        else {
            video.videoUrl = videoDto.videoUrl;
            video.title = videoDto.title;
            return video.save();
        }
    }
};
VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(video_schemas_1.Video.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, comment_service_1.CommentService])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map