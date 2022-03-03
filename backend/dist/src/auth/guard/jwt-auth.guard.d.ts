import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
declare const JwtAuthGuard_base: any;
export declare class JwtAuthGuard extends JwtAuthGuard_base implements CanActivate {
    private userService;
    constructor(userService: UserService);
    canActivate(context: ExecutionContext): any;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
