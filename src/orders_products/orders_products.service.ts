import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma';
import {
  CreateOrdersProductDto,
  Product,
} from './dto/create-orders_product.dto';
import { UpdateOrdersProductDto } from './dto/update-orders_product.dto';

@Injectable()
export class OrdersProductsService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateOrdersProductDto) {
    data.products.map(async (product) => {
      const order = await this.prisma.orders.findUnique({
        where: {
          id: data.id,
        },
      });

      if (!order) {
        this.prisma.orders.create({
          data: {
            client: data.client,
            contact: data.contact,
            dateDelivery: data.dateDelivery,
            statusOrder: data.statusOrder,
          },
        });
      }

      this.prisma.orders_products.create({
        data: {
          description: product.description,
          price: product.price,
          quantity: product.quantity,
          weight: product.weight,
          ordersId: data.id,
        },
      });
    });
  }

  findAll() {
    return `This action returns all ordersProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersProduct`;
  }

  update(id: number, data: UpdateOrdersProductDto) {
    return `This action updates a #${id} ordersProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersProduct`;
  }
}
