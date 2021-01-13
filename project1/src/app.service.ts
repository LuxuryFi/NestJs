import { Injectable } from '@nestjs/common';
import {ProductItem} from './interfaces/product.interface'

@Injectable()
export class AppService {



  getHello(): string {
    return 'Hello World22!';
  }


  
}
