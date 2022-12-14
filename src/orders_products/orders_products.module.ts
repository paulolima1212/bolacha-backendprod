import { Module } from '@nestjs/common';
import { OrdersProductsService } from './orders_products.service';
import { OrdersProductsController } from './orders_products.controller';
import { PrismaService } from 'src/database/prisma';

@Module({
  controllers: [OrdersProductsController],
  providers: [OrdersProductsService, PrismaService],
})
export class OrdersProductsModule {}
