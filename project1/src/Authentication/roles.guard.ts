import {Injectable , CanActivate, ExecutionContext} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { promises } from 'fs'
import {Observable} from 'rxjs'

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
    canActivate(
        context: ExecutionContext,
    ) : boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());

        if (!roles){
            return true;
        }

        const request = context.switchToHttp().getRequest();
        console.log(request);
        const product = request.product;

        console.log(product);
        return roles.some((product) => {   
            return product === 'user';
        });
    }
}
