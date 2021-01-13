import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './products/product.module';
import { LoggerMiddleware } from './products/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm'
import { rootCertificates } from 'tls';
import { Product } from './products/product.entity';

@Module({
  imports: [ProductModule, TypeOrmModule.forRoot({
    type: 'mysql',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nodejs',
    entities: [Product],
    synchronize: true,
    autoLoadEntities:true
   
  }) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('products/:splat*');
  }
}
