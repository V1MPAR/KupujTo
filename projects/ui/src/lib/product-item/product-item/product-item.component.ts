import { Component, Input } from '@angular/core';
import { ProductModel, ProductService } from "../../../../../kupujto/src/app/shared/services/product.service";
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsDialogComponent } from "../../../../../kupujto/src/app/shared/dialogs/product-details-dialog/product-details-dialog.component";

@Component({
  selector: 'lib-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() product!: ProductModel;

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  addToCart(product: ProductModel) {
    console.log('Add to cart');
  }

  viewProduct(product: ProductModel) {
    const dialog = this.dialog.open(ProductDetailsDialogComponent, {
      data: {
        product
      }
    });
  }

}
