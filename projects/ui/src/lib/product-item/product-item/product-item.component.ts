import { Component, Input } from '@angular/core';
import { ProductModel, ProductService } from "../../../../../kupujto/src/app/shared/services/product.service";

@Component({
  selector: 'lib-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() product!: ProductModel;

  constructor(private productService: ProductService) { }

  addToCart(product: ProductModel) {
    console.log('Add to cart');
  }

  viewProduct(product: ProductModel) {
    console.log('View product');
  }

}
