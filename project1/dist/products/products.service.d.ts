import { ProductItem } from 'src/interfaces/product.interface';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    remove(id: number): Promise<void>;
    create(product: ProductItem): Promise<void>;
}
