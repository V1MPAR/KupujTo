import { Component, Input, OnInit } from '@angular/core';
import { BasketItemModel, BasketService } from "../../../../../kupujto/src/app/shared/services/basket.service";

@Component({
  selector: 'lib-order-detail-item',
  templateUrl: './order-detail-item.component.html',
  styleUrls: ['./order-detail-item.component.scss']
})
export class OrderDetailItemComponent implements OnInit {

  @Input() public basketItem!: BasketItemModel;

  constructor(private basketService: BasketService) { }

  public ngOnInit(): void {

  }

  removeFromBasket(basketItem: BasketItemModel, e: any) {
    e.preventDefault();
    this.basketService.removeFromBasket(basketItem.product);
  }

}
