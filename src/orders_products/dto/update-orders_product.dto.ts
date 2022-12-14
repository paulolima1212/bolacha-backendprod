import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdersProductDto } from './create-orders_product.dto';

export class UpdateOrdersProductDto extends PartialType(CreateOrdersProductDto) {}
