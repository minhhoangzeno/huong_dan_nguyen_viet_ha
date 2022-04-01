/// <reference types="multer" />
import { VideoService } from './video.service';
import { VideoDto } from './dto/video.dto';
export declare class VideoController {
    private videoService;
    constructor(videoService: VideoService);
    getBlogsLoadMore(body: any): Promise<(import("./schemas/video.schemas").Video & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getVideos(skipNumber: any): Promise<{
        totalPage: number;
        data: (import("./schemas/video.schemas").Video & import("mongoose").Document<any, any, any> & {
            _id: any;
        })[];
    }>;
    uploadFile(files: {
        file?: Express.Multer.File[];
        videoURL?: Express.Multer.File[];
    }, body: VideoDto, req: any): Promise<import("./schemas/video.schemas").Video>;
    removeBlog(id: any): Promise<void>;
    getBlogById(id: any): Promise<import("./schemas/video.schemas").Video>;
}
