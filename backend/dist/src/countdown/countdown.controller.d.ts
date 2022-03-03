import { CountdownService } from './countdown.service';
export declare class CountdownController {
    private countdownService;
    constructor(countdownService: CountdownService);
    getCountdowns(): unknown;
    getDetail(id: any): unknown;
    createCountdown(body: any): unknown;
    updateCountdown(id: any, body: any): unknown;
    removeCountdown(id: any): unknown;
}
