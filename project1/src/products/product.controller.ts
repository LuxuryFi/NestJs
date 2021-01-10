import {
    Body,
    Controller,
    Get,
    Post,
    Query,
    Put,
    Param,
    Delete,
    Render,
    Res,
    Redirect
} from '@nestjs/common';
import {
    CreateProductDto,
    ListAllEntities
} from './dto/create-product.dto';
import {ProductsService} from './products.service'
import {Product} from '../interfaces/product.interface'
import { Response } from 'express';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }


    @Get('create')
    @Render('create.hbs')
    create() {

    var products = this.productsService.findAll();
    var product = products.slice(0).pop();

    
    var id = product ?  product.id : 0;
        let a = {
            id:id + 1,
            name: 'abc',
            price: 1000,
            description: 'aa'
        }
       this.productsService.create(a);
       return  {message : 'inserted'};
    }


    @Get('delete')
    deleteOne(@Res() res, @Query() query){
        let products = this.productsService.findAll();
        let id = query.id;

        products.forEach((element,index) => {
            if (element.id == id) products.splice(index, 1);
        });
       res.status(302).redirect('/products/index')
    }


    @Get('update')
    @Render('update.hbs')
    update(@Query()  query, @Body() body){
        let products = this.productsService.findAll();
        let id = query.id;
        let product = null;
        products.forEach((element,index) => {
            if (element.id == id) 
            product = element;
        });
        return {product :product};
    }


    @Post('updateOne')
    updateOne(@Res()  res, @Query()  query, @Body() body){
        let products = this.productsService.findAll();
        let id = query.id;

        let name = body.name;
        let price = body.price;
        let description = body.description;
        console.log(id);
        products.forEach((element,index) => {
           
            console.log(element.id);
            if (element.id == id) {
                element.name = name;
               
                element.price = price;
                element.description = description;
            }
            else {
                console.log('faill');
            };
        });

        // for (let index = 0; index < products.length; index++) {
        //    if (products[index].id == id){
        //        products[index].name = name;
        //    }
            
        // }

       res.status(302).redirect('/products/index')
    }

    @Get('index')
    @Render('index.hbs')
    findAll() {
        let string = '';
        let products = this.productsService.findAll();
       return {message : products};
    }

}
