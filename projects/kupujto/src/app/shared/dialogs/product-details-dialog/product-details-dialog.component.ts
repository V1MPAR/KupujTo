import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from "../../services/product.service";
import { BasketService } from "../../services/basket.service";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.scss']
})
export class ProductDetailsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public product: ProductModel, private dialogRef: MatDialogRef<ProductDetailsDialogComponent>, private basketService: BasketService, private snackBar: MatSnackBar) {
  }

  addToCart(product: ProductModel) {
    this.basketService.addProductToBasket(product);
    this.snackBar.open('Produkt został dodany do koszyka', 'Zamknij', { duration: 2000 });
    this.dialogRef.close();
  }

}

