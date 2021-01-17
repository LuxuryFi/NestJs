import { Category } from 'src/category/category.entity';
import { CategoryProduct } from 'src/categoryproduct/categoryproduct.entity';
import { Entity , Column , PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from  'typeorm'
import 'reflect-metadata';


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_name: string;

    @Column()
    description: string;

    @Column()
    price: number

    @ManyToOne(type => Category)
    @JoinColumn({name : 'category_id'})
    category: Category;
    
}
