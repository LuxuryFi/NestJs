import { Category } from 'src/category/category.entity';
import 'reflect-metadata';
export declare class Product {
    id: number;
    product_name: string;
    description: string;
    price: number;
    category: Category;
}
