import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(): {
        message: string;
    };
    createOne(body: any, res: any): void;
    deleteOne(res: any, query: any): void;
    update(query: any, body: any): {
        product: any;
    };
    updateOne(res: any, query: any, body: any): void;
    findAll(): {
        message: Promise<import("./product.entity").Product[]>;
    };
}
