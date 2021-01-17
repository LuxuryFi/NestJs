import { Category } from "src/category/category.entity";
import { Product } from "src/products/product.entity";
import 'reflect-metadata';
export declare class CategoryProduct {
    category_id: Category;
    product_id: Product;
    description: string;
}
