export type Product = {
  id: string;
  weight: string;
  price: string;
  description: string;
  quantity: number;
};

export class CreateOrdersProductDto {
  id: number;
  client: string;
  contact: string;
  dateDelivery: string;
  statusOrder: string;
  products: Product[];
}
