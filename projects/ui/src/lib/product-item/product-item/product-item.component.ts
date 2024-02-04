import { Component, Input } from '@angular/core';
import { ProductModel, ProductService } from "../../../../../kupujto/src/app/shared/services/product.service";
import { MatDialog } from '@angular/material/dialog';
import {
  ProductDetailsDialogComponent
} from "../../../../../kupujto/src/app/shared/dialogs/product-details-dialog/product-details-dialog.component";
import { BasketService } from "../../../../../kupujto/src/app/shared/services/basket.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'lib-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() product!: ProductModel;

  constructor(private productService: ProductService, private basketService: BasketService, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  addToCart(product: ProductModel) {
    this.basketService.addProductToBasket(product);
    this.snackBar.open('Produkt został dodany do koszyka', 'Zamknij', {
      duration: 2000,
    });
  }

  viewProduct(product: ProductModel) {
    const dialog = this.dialog.open(ProductDetailsDialogComponent, {
      data: product
    });
  }

}
