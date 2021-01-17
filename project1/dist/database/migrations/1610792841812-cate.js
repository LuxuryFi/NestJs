"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cate1610792841812 = void 0;
class cate1610792841812 {
    constructor() {
        this.name = 'cate1610792841812';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_0dce9bc93c2d2c399982d04bef1`");
        await queryRunner.query("ALTER TABLE `product` CHANGE `category_id` `category_id` int NULL");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_0dce9bc93c2d2c399982d04bef1` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_0dce9bc93c2d2c399982d04bef1`");
        await queryRunner.query("ALTER TABLE `product` CHANGE `category_id` `category_id` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_0dce9bc93c2d2c399982d04bef1` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
}
exports.cate1610792841812 = cate1610792841812;
//# sourceMappingURL=1610792841812-cate.js.map