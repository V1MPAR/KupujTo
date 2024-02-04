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
      if (basketItem.product.promoPrice != null) {
        basketItem.totalPrice = basketItem.product.promoPrice * basketItem.quantity;
      } else {
        basketItem.totalPrice = basketItem.product.price * basketItem.quantity;
      }
    } else {
      basketItems.push({
        product,
        quantity: 1,
        totalPrice: product.promoPrice != null ? product.promoPrice : product.price
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

  removeFromBasket(product: ProductModel) {
    const basketItems = this.getBasketItems();
    const basketItemIndex = basketItems.findIndex(item => item.product.id === product.id);
    if (basketItemIndex > -1) {
      basketItems.splice(basketItemIndex, 1);
      localStorage.setItem('basket', JSON.stringify(basketItems));
      this.basketItems.next(basketItems);
    }
  }

  clearBasket() {
    localStorage.setItem('basket', JSON.stringify([]));
    this.basketItems.next([]);
  }

  private initBasket() {
    localStorage.setItem('basket', JSON.stringify([]));
  }

}
