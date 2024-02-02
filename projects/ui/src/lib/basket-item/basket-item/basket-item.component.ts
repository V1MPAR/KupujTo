import { Component, Input, OnInit } from '@angular/core';
import { BasketItemModel } from "../../../../../kupujto/src/app/shared/services/basket.service";

@Component({
  selector: 'lib-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {

  @Input() public basketItem!: BasketItemModel;

  constructor() { }

  public ngOnInit(): void {

  }

}
