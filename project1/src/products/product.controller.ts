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
    Redirect,
    ParseIntPipe,
    UseGuards
} from '@nestjs/common';
import {
    CreateProductDto,
    ListAllEntities
} from './dto/create-product.dto';
import {ProductsService} from './products.service'
import {ProductItem} from '../interfaces/product.interface'
import { Response } from 'express';
import { Roles } from 'src/Authentication/roles.decorator';
import { RolesGuard } from 'src/Authentication/roles.guard';
import { Role } from 'src/Authentication/role.enum';

@Controller('products')
@UseGuards(RolesGuard) 
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    

    @Get('create')
    @Render('create.hbs')
    create() {

       return  {message : 'inserted'};
    }

    @Roles(Role.Admin)
    @Post('createOne')
    
    createOne(@Body() body, @Res() res){
        let a = new ProductItem();
        a.product_name = body.name,
        a.description = body.description,
        a.price = body.price

        this.productsService.create(a);
        res.status(302).redirect('/products/index')
    }


    @Get('delete/:id')
    deleteOne(@Res() res, @Query() query){
        let products = this.productsService.findAll();
        let id = query.id;

        // products.forEach((element,index) => {
        //     if (element.id == id) products.splice(index, 1);
        // });
       res.status(302).redirect('/products/index')
    }


    @Get('update/:id')
    @Render('update.hbs')
    update(@Query()  query, @Body() body, @Param('id', ParseIntPipe) param){
        let products = this.productsService.findAll();
        let id = query.id;
        let product = null;
        return {product :product};
    }

  

   
   
    // @Roles('admin')
    @Post('updateOne')    
    updateOne(@Res()  res, @Query()  query, @Body() body){
        let products = this.productsService.findAll();
        let id = query.id;

        let name = body.name;
        let price = body.price;
        let description = body.description;
        console.log(id);
      

       res.status(302).redirect('/products/index')
    }

    // @Roles(Role.User)
    @Get('index')
    @Render('index.hbs')
    async findAll() { 
        let products = await this.productsService.findAll();

        console.log(products);
       return {message : products};
    }

}
