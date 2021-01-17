import { Module } from '@nestjs/common';
import { CategoryproductController } from './categoryproduct.controller';
import { CategoryproductService } from './categoryproduct.service';

@Module({
  controllers: [CategoryproductController],
  providers: [CategoryproductService]
})
export class CategoryproductModule {}
