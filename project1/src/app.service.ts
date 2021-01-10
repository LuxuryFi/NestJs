import { Injectable } from '@nestjs/common';
import {Product} from './interfaces/product.interface'

@Injectable()
export class AppService {

  private readonly products : Product[] = [];

  getHello(): string {
    return 'Hello World22!';
  }

  create(product : Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }
}
