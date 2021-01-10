import {Controller, Module} from '@nestjs/common';

import {ProductsController} from './product.controller'

import {ProductsService} from './products.service'

@Module({
   providers: [ProductsService],
    controllers: [ProductsController],
})

// @Module({ 
//     providers: [ProductsService],
//     controllers: [ProductsController],
   
// })

export class ProductModule {}

