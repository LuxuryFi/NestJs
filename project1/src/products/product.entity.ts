import { Entity , Column , PrimaryGeneratedColumn} from  'typeorm'

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
}
