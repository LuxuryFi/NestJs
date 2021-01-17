import { Category } from "src/category/category.entity";
import { Product } from "src/products/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import 'reflect-metadata';



@Entity()
export class CategoryProduct {

    @ManyToOne(type => Category, {primary: true})
    @JoinColumn({ name: "category_id" })
    category_id : Category;
    
    @ManyToOne(type => Product, {primary:true})
    @JoinColumn({ name: "product_id" })
    product_id: Product;

    @Column()
    description :string;

}
