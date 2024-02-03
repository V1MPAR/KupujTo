import { Injectable } from '@angular/core';
import { BasketItemModel } from "../shared/services/basket.service";

export enum PaymentStatus {
  SUCCESS = 'SUCCESS',
  WAIT = 'WAIT',
  REJECTED = 'REJECTED',
}

export interface Order {
  id: number;
  delivery: {
    name: string;
    lastname: string;
    street: string;
    flat: string;
    streetCode: string;
    city: string;
    email: string;
    phone: string;
    method: string;
  };
  payment: {
    method: string;
  };
  status: PaymentStatus;
  totalPrice: number;
  deliveryCost: number;
  basketItems: BasketItemModel[];
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  constructor() {
    if (!this.getOrders()) {
      this.initOrders();
    }
  }

  getOrders(): Order[] {
    return JSON.parse(localStorage.getItem('orders')!);
  }

  addOrder(order: Order) {
    const orders = this.getOrders();
    order.id = this.generateUniqueId();
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
  }

  private generateUniqueId(): number {
    const id = Math.floor(Math.random() * 1000000);
    const orders = this.getOrders();
    if (orders.find(order => order.id === id)) {
      return this.generateUniqueId();
    }
    return id;
  }

  private initOrders() {
    localStorage.setItem('orders', JSON.stringify([]));
  }

}
