import { Component } from '@angular/core';
import { ProductService } from "../../../shared/services/product.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private productService: ProductService) { }

  public getRandomProducts(count: number) {
    return this.productService.getRandomProducts(count);
  }

}
