import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateOrderDto) {
    return this.prisma.orders.create({
      data,
    });
  }

  findAll() {
    return this.prisma.orders.findMany();
  }

  findOne(id: number) {
    console.log('pass');
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  findMaxOrderId() {
    return this.prisma.$queryRawUnsafe(`
    SELECT id FROM orders ORDER BY id DESC
  `);
  }
}
