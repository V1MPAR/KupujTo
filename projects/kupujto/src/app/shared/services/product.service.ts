import { Injectable } from '@angular/core';

export interface ProductModel {
  id: number;
  name: string;
  price: number;
  promoPrice?: number;
  promoPercentValue?: number;
  category: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    if (!this.getProducts()) {
      this.initProducts();
    }
  }

  getProducts(): ProductModel[] {
    return JSON.parse(localStorage.getItem('products')!);
  }

  getRandomProducts(count: number): ProductModel[] {
    const productsFromStorage: ProductModel[] = this.getProducts();
    let products: ProductModel[] = [];
    let randomIndex: number;
    if (productsFromStorage.length < count) {
      return productsFromStorage;
    }
    while (products.length < count) {
      randomIndex = Math.floor(Math.random() * productsFromStorage.length);
      if (products.find(product => product.id === productsFromStorage[randomIndex].id)) {
        continue;
      }
      products.push(productsFromStorage[randomIndex]);
    }
    return products;
  }

  getProductsByCategory(category: string): ProductModel[] {
    return this.getProducts().filter(product => product.category === category);
  }

  private initProducts(): void {
    const products: ProductModel[] = [
      {
        id: 1,
        name: 'iPhone 15 Pro',
        price: 5399,
        promoPrice: 4859,
        promoPercentValue: 10,
        category: 'telefony',
        image: 'https://f00.esfr.pl/foto/3/127951413545/862faedc5763454ddb7cbeadb9023045/apple-iphone-15-pro-128gb-purple,127951413545_3.jpg'
      },
      {
        id: 2,
        name: 'Apple MacBook Pro 14" M2 Pro 16GB 1TB Space Gray',
        price: 13299,
        promoPrice: 12299,
        promoPercentValue: 8,
        category: 'laptopy',
        image: 'https://idream.pl/images/thumbnails/1100/900/detailed/75/14%27%27_space_gray_sske-3s.png',
      },
      {
        id: 3,
        name: 'Telewizor TCL 55P735 55" LED 4K',
        price: 1999.99,
        category: 'telewizory',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/37/3733274/TCL_P735_50_55_65_HERO_ISO2001.jpg',
      },
      {
        id: 4,
        name: 'Trek Domane Al 2 60 Black Carbon Smoke',
        price: 4199,
        category: 'rowery-i-akcesoria',
        image: 'https://interbike.pl/images/sj473/147000-148000/Rower-Trek-Domane-AL-2-60-Trek-BlackCarbon-Smoke_%5B147101%5D_780.jpg',
      },
      {
        id: 5,
        name: 'New Balance 411 v3 M411CT3 Zielony',
        price: 239.99,
        category: 'bieganie',
        image: 'https://img.eobuwie.cloud/eob_product_1800w_1800h(7/a/2/9/7a299557a89ca9ae49d162c1b4d7b725bc3a4d55_02_0196652946374_rz.jpg,webp)/buty-new-balance-411-v3-m411ct3-zielony-0000303189648.webp',
      },
      {
        id: 6,
        name: 'Kreatyna KFD Monohydrat 500g',
        price: 53.99,
        category: 'silownia-i-fitness',
        image: 'https://sklep.kfd.pl/9300-large_default/kfd-premium-creatine-500-g-kreatyna-monohydrat.jpg',
      },
    ];
    localStorage.setItem('products', JSON.stringify(products));
  }

}
