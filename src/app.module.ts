import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { OrdersProductsModule } from './orders_products/orders_products.module';

@Module({
  imports: [OrdersModule, OrdersProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
