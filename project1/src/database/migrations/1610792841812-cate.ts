import {MigrationInterface, QueryRunner} from "typeorm";

export class cate1610792841812 implements MigrationInterface {
    name = 'cate1610792841812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_0dce9bc93c2d2c399982d04bef1`");
        await queryRunner.query("ALTER TABLE `product` CHANGE `category_id` `category_id` int NULL");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_0dce9bc93c2d2c399982d04bef1` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_0dce9bc93c2d2c399982d04bef1`");
        await queryRunner.query("ALTER TABLE `product` CHANGE `category_id` `category_id` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_0dce9bc93c2d2c399982d04bef1` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
