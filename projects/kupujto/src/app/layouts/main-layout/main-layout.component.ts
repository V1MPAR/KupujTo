import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";
import { FlatTreeControl } from "@angular/cdk/tree";
import { BasketItemModel, BasketService } from "../../shared/services/basket.service";
import { Router } from "@angular/router";

interface CategoryNode {
  name: string;
  routerLink: string;
  children?: CategoryNode[];
}

const TREE_DATA: CategoryNode[] = [
  {
    name: 'Elektronika',
    routerLink: '',
    children: [
      {
        name: 'Telefony',
        routerLink: 'kategoria/telefony',
      },
      {
        name: 'Laptopy',
        routerLink: 'kategoria/laptopy',
      },
      {
        name: 'Telewizory',
        routerLink: 'kategoria/telewizory',
      }
    ],
  },
  {
    name: 'Sport i turystyka',
    routerLink: '',
    children: [
      {
        name: 'Rowery i akcesoria',
        routerLink: 'kategoria/rowery-i-akcesoria',
      },
      {
        name: 'Bieganie',
        routerLink: 'kategoria/bieganie',
      },
      {
        name: 'Siłownia i fitness',
        routerLink: 'kategoria/silownia-i-fitness',
      },
    ],
  },
  {
    name: 'Kultura i rozrywka',
    routerLink: '',
    children: [
      {
        name: 'Gry',
        routerLink: 'kategoria/gry',
      },
      {
        name: 'Muzyka',
        routerLink: 'kategoria/muzyka',
      },
      {
        name: 'Filmy',
        routerLink: 'kategoria/filmy',
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  routerLink: string;
  level: number;
}

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  private _transformer = (node: CategoryNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      routerLink: node.routerLink,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  basketItems: BasketItemModel[] = this.basketService.getBasketItems()

  constructor(private basketService: BasketService, private router: Router) {
    this.dataSource.data = TREE_DATA;
    this.basketService.basketItems.subscribe((basketItems => {
      this.basketItems = basketItems;
    }));
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  updateBasketItems() {
    this.basketItems = this.basketService.getBasketItems();
  }

  goToOrder() {
    this.router.navigate(['/zamowienie']).then();
  }
}
