import { ProductcountdownService } from './productcountdown.service';
export declare class ProductcountdownController {
    private productcountdownService;
    constructor(productcountdownService: ProductcountdownService);
    getProductCountdowns(): unknown;
    createCountdown(body: any, req: any): unknown;
}
