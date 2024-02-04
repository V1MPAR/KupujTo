import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel, ProductService } from "../../../shared/services/product.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public category: any;
  public products: ProductModel[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.category = params.category;
      this.products = this.productService.getProductsByCategory(params.category);
    });
  }

}
