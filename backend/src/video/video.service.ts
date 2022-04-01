import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoDto } from './dto/video.dto';
import { Video, VideoDocument } from './schemas/video.schemas';

@Injectable()
export class VideoService {
    constructor(@InjectModel(Video.name) private videoModel: Model<VideoDocument>) { }

    async loadMore(videoId) {
        return this.videoModel.find({ '_id': { $ne: videoId } })
    }

    async findAll(skipNumber) {
        return this.videoModel.find({}).sort({ createdAt: -1 }).skip(skipNumber).limit(5).exec().then(data => {
            return this.videoModel.countDocuments().exec().then(count => {
                return {
                    totalPage: count,
                    data
                };
            })
        })

    }

    async createVideo(createVideoDto: VideoDto, photoURL: string, videoURL: string, username: string): Promise<Video> {
        let date = new Date();
        const video = new this.videoModel({ ...createVideoDto, photoURL, createdAt: date, createdBy: username, videoURL })
        return video.save();
    }

    async findById(id: string): Promise<Video> {
        return await this.videoModel.findById(id)
    }

    async deleteById(id: string) {
        let video = await this.videoModel.findById(id);
        if (video) {
            video.remove()
        }
    }

    // async updateById(id: string, updateVideoDto: VideoDto, photoURL?: string): Promise<Video> {
    //     let video = await this.videoModel.findById(id.toString())
    //     if (photoURL) {
    //         video.title = updateVideoDto.title;
    //         video.metaDescription = updateVideoDto.metaDescription;
    //         video.content = updateVideoDto.content;
    //         video.photoURL = photoURL;
    //         return video.save();
    //     } else {
    //         video.title = updateVideoDto.title;
    //         video.metaDescription = updateVideoDto.metaDescription;
    //         video.content = updateVideoDto.content;
    //         return video.save();
    //     }

    // }

}
