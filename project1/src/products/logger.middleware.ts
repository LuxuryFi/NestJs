import { Injectable, NestMiddleware, SetMetadata } from "@nestjs/common";
import {Request , Response } from 'express'

@Injectable()

export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        //throw new Error("Method not implemented.");
        console.log('request happening' + req.ip + req.url);
        SetMetadata('roles','admin');
        next();
    }

}
