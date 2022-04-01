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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const video_schemas_1 = require("./schemas/video.schemas");
let VideoService = class VideoService {
    constructor(videoModel) {
        this.videoModel = videoModel;
    }
    async loadMore(videoId) {
        return this.videoModel.find({ '_id': { $ne: videoId } });
    }
    async findAll(skipNumber) {
        return this.videoModel.find({}).sort({ createdAt: -1 }).skip(skipNumber).limit(5).exec().then(data => {
            return this.videoModel.countDocuments().exec().then(count => {
                return {
                    totalPage: count,
                    data
                };
            });
        });
    }
    async createVideo(createVideoDto, photoURL, videoURL, username) {
        let date = new Date();
        const video = new this.videoModel(Object.assign(Object.assign({}, createVideoDto), { photoURL, createdAt: date, createdBy: username, videoURL }));
        return video.save();
    }
    async findById(id) {
        return await this.videoModel.findById(id);
    }
    async deleteById(id) {
        let video = await this.videoModel.findById(id);
        if (video) {
            video.remove();
        }
    }
};
VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(video_schemas_1.Video.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map