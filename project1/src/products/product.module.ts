import {Controller, Module} from '@nestjs/common';

import {ProductsController} from './product.controller'

import {ProductsService} from './products.service'

import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductsService],
    controllers: [ProductsController],
})

// @Module({ 
//     providers: [ProductsService],
//     controllers: [ProductsController],
   
// })

export class ProductModule {}

