import { Injectable } from '@angular/core';
import { ProductModel } from "./product.service";
import { BehaviorSubject } from "rxjs";

export interface BasketItemModel {
  product: ProductModel;
  quantity: number;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {

  public basketItems: BehaviorSubject<BasketItemModel[]> = new BehaviorSubject<BasketItemModel[]>(this.getBasketItems());

  constructor() {
    if (!this.getBasketItems()) {
      this.initBasket();
    }
  }

  getBasketItems(): BasketItemModel[] {
    return JSON.parse(localStorage.getItem('basket')!);
  }

  addProductToBasket(product: ProductModel) {
    const basketItems = this.getBasketItems();
    const basketItem = basketItems.find(item => item.product.id === product.id);
    if (basketItem) {
      basketItem.quantity += 1;
      basketItem.totalPrice = basketItem.product.price * basketItem.quantity;
    } else {
      basketItems.push({
        product,
        quantity: 1,
        totalPrice: product.price
      });
    }
    localStorage.setItem('basket', JSON.stringify(basketItems));
    this.basketItems.next(basketItems);
  }

  changeQuantity(product: ProductModel, quantity: number) {
    const basketItems = this.getBasketItems();
    const basketItem = basketItems.find(item => item.product.id === product.id);
    if (basketItem) {
      basketItem.quantity = quantity;
      basketItem.totalPrice = basketItem.product.price * basketItem.quantity;
      localStorage.setItem('basket', JSON.stringify(basketItems));
    }
  }

  private initBasket() {
    localStorage.setItem('basket', JSON.stringify([]));
  }

}
