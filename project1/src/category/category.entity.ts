import { CategoryProduct } from 'src/categoryproduct/categoryproduct.entity';
import { Product } from 'src/products/product.entity';
import { Entity , Column , PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from  'typeorm'
import 'reflect-metadata';


@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    
}
