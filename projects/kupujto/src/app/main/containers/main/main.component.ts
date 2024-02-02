import { Component } from '@angular/core';
import { ProductModel, ProductService } from "../../../shared/services/product.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public products: ProductModel[] = this.getRandomProducts(4)

  constructor(private productService: ProductService) { }

  public getRandomProducts(count: number) {
    return this.productService.getRandomProducts(count);
  }

}
