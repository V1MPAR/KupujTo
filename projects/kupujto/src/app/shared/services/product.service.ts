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

      {
        id: 6,
        name: 'SAMSUNG Galaxy S23',
        price: 3599.00,
        category: 'telefony',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/50/5073788/Smartfon-SAMSUNG-Galaxy-S23-5G-Czarny-tyl-front-1.jpg',
      },
      {
        id: 7,
        name: 'XIAOMI Redmi Note 13 Pro',
        price: 1299,
        promoPrice: 1169.10,
        promoPercentValue: 10,
        category: 'telefony',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/61/6180790/Smartfon-XIAOMI-Redmi-Note-13-Pro-8-256GB-120Hz-Fioletowy-front-tyl.jpg',
      },
      {
        id: 8,
        name: 'MOTOROLA Moto G84',
        price: 1325,
        category: 'telefony',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5807040/Smartfon-MOTOROLA-Moto-G84-5G-12-256GB-120Hz-Czerwony-front-tyl.jpg',
      },
      {
        id: 9,
        name: 'LENOVO IdeaPad Slim 15.6" IPS i5-12450H 8GB RAM 512GB SSD',
        price: 2499.99,
        category: 'laptopy',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/59/5942516/Laptop-LENOVO-IdeaPad-Slim-3-15IAH8-2.jpg',
      },
      {
        id: 10,
        name: 'Apple MacBook Pro 14" M2 Pro 16GB 1TB Space Gray',
        price: 13299,
        promoPrice: 12299,
        promoPercentValue: 8,
        category: 'laptopy',
        image: 'https://idream.pl/images/thumbnails/1100/900/detailed/75/14%27%27_space_gray_sske-3s.png',
      },
      {
        id: 11,
        name: 'Dell XPS 13',
        price: 6599.99,
        promoPrice: 6071.99,
        promoPercentValue: 8,
        category: 'laptopy',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/42/4242284/Laptop-DELL-XPS-9315-9164-front.jpg',
      },
      {
        id: 12,
        name: 'HP Spectre x360',
        price: 9399,
        promoPrice: 8469.10,
        promoPercentValue: 8,
        category: 'laptopy',
        image: 'https://f00.esfr.pl/foto/3/110006106705/f020a781349b528a0f573bce003cbab0/hp-laptop-spectre-x360-14-i7-16gb-1tb-w11p,110006106705_3.jpg',
      },
      {
        id: 13,
        name: 'Lenovo ThinkPad X1 Carbon',
        price: 14499,
        category: 'laptopy',
        image: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/5/pr_2023_5_31_14_57_2_294_00.jpg',
      },
      {
        id: 14,
        name: 'Samsung QLED Q80A 65" 4K Smart TV',
        price: 5299,
        category: 'telewizory',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/51/5148630/Telewizor-SAMSUNG-Q80C-skos-1.jpg',
      },
      {
        id: 15,
        name: 'LG OLED CX 55" 4K Smart TV',
        price: 5999,
        category: 'telewizory',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/52/5255150/Telewizor-LG-55C34LA-skos-1.jpg',
      },
      {
        id: 16,
        name: 'Sony BRAVIA XR A80J 65" OLED 4K',
        price: 9499,
        category: 'telewizory',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/54/5436360/Telewizor-SONY-XR-65A80LAEP-1.jpg',
      },
      {
        id: 17,
        name: 'Panasonic TX-55JZ1500E 55" OLED 4K',
        price: 5000,
        category: 'telewizory',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/41/4157484/Telewizor-PANASONIC-TX-55LZ1000E-diablo-skos.jpg',
      },
      {
        id: 18,
        name: 'Cannondale Synapse Carbon Disc Ultegra',
        price: 13099.00,
        promoPrice: 10900.00,
        promoPercentValue: 16.45,
        category: 'rowery-i-akcesoria',
        image: 'https://www.greenbike.pl/images/mini/500px_cannondale-synapse-carbon-4-rower-szosowy-endurance-carbon-wygodna-szosa-000.jpg',
      },
      {
        id: 19,
        name: 'Specialized Sirrus X 5.0',
        price: 7723.16,
        category: 'rowery-i-akcesoria',
        image: 'https://ibkbike.vtexassets.com/arquivos/ids/981337-1200-auto?v=638304329917900000&width=1200&height=auto&aspect=true',
      },
      {
        id: 20,
        name: 'Giant Defy Advanced Pro 1',
        price: 19999.00,
        category: 'rowery-i-akcesoria',
        image: 'https://trekking24.pl/46696-large_default/giant-defy-advanced-pro-1-2024.jpg',
      },
      {
        id: 21,
        name: 'Scott Addict RC 20',
        price: 20958.53,
        category: 'rowery-i-akcesoria',
        image: 'https://cdn.mammothbikes.com/product/Large/472106.jpg',
      }, 
      {
        id: 22,
        name: 'Adidas Ultraboost 21 Biale',
        price: 799.99,
        promoPrice: 399.99,
        promoPercentValue: 50,
        category: 'bieganie',
        image: 'https://img2.ans-media.com/i/1080x1626/AA00-OBU09F-00X_F1.jpg@webp?v=1684472063',
      },
      {
        id: 23,
        name: 'Nike Air Zoom Pegasus 38 Czarne',
        price: 369.99,
        category: 'bieganie',
        image: 'https://fitanu.com/media/catalog/product/cache/44e5e6a5de13081f430826f494e7fd04/_/1/_194955811207_-001-CW7358-001-NIKE-AIR-ZOOM-PEGASUS-38-black.webpa',
      },
      {
        id: 24,
        name: 'Garmin Forerunner 245 Music',
        price: 919.00,
        category: 'bieganie',
        image: 'https://f00.esfr.pl/foto/7/69273198521/eaefd04fc7b9ae93f2f76c112f3ca937/garmin-zegarek-forerunner-245-black-slate-garm,69273198521_3.jpg',
      },
      {
        id: 25,
        name: 'Baton bialkowy Bounty Protein',
        price: 146.90,
        category: 'silownia-i-fitness',
        image: 'https://gymbeam.pl/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/b/o/bounty-protein-bag-new_1.jpg',
      },
      {
        id: 26,
        name: 'Hantle Neoprenowe 2x5kg',
        price: 139.98,
        category: 'silownia-i-fitness',
        image: 'https://sport-blast.pl/environment/cache/images/500_500_productGfx_2721/neo-nowe.jpg',
      },
      {
        id: 27,
        name: 'PlayStation 5',
        price: 2499.99,
        category: 'gry',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/60/6007768/Konsola-SONY-PlayStation-5-Digital-Slim-skos.jpg',
      },
      {
        id: 28,
        name: 'Xbox Series X',
        price: 2199.99,
        category: 'gry',
        image: 'https://image.ceneostatic.pl/data/products/88072703/i-microsoft-xbox-series-x.jpg?=646a7',
      },
      {
        id: 29,
        name: 'Cyberpunk 2077 - Edycja Kolekcjonerska',
        price: 229.00,
        category: 'gry',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/61/6181166/Cyberpunk-2077-Samurai-Good-Loot-Pack-Gra-PS4-opakowanie-front1.jpg',
      },
      {
        id: 30,
        name: 'Razer DeathAdder Elite - Mysz Gamingowa',
        price: 144.00,
        promoPrice: 169.99,
        promoPercentValue: 18,
        category: 'gry',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/17/1710569/Mysz-RAZER-DeathAdder-Essential-Czarny-2.jpg',
      },
      {
        id: 31,
        name: 'SteelSeries Apex Pro - Klawiatura Mechaniczna',
        price: 889.99,
        category: 'gry',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/21/2111697/Klawiatura-STEELSERIES-Apex-7-front-2.jpg',
      },
      {
        id: 32,
        name: 'Vinyl:KORTEZ NAUCZ MNIE TANCZYC 2LP',
        price: 194.99,
        promoPrice: 191.09,
        promoPercentValue: 2,
        category: 'muzyka',
        image: 'https://media.dvdmax.pl/IMG/360x460/2869906_0001.jpg',
      },
      {
        id: 33,
        name: 'Bluetooth Speaker JBL Flip 5',
        price: 449.99,
        category: 'muzyka',
        image: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/19/1951859/Glosnik-mobilny-JBL-Flip-5-Niebieski-front.jpg',
      },
      {
        id: 34,
        name: 'AKG K371 Over-Ear Closed-Back Headphones',
        price: 599,
        category: 'muzyka',
        image: 'https://img.kytary.com/eshop_pl/velky_v2/na/637251369742300000/654dd116/64746004/akg-k371.jpg',
      },
      {
        id: 35,
        name: 'Fender American Professional II Stratocaster',
        price: 8390.00,
        promoPrice: 7551.00,
        promoPercentValue: 10,
        category: 'muzyka',
        image: 'https://img.kytary.com/eshop_pl/velky_v2/na/638387607957900000/eb0cd4e7/64932567/fender-american-professional-ii-stratocaster-rw-mbl.jpg',
      },
      {
        id: 36,
        name: 'Blu-ray: The Lord of the Rings Trilogy',
        price: 380.90,
        category: 'filmy',
        image: 'https://m.media-amazon.com/images/I/91eWnv5ZE5L._SL1500_.jpg',
      },
      {
        id: 37,
        name: '4K UHD Blu-ray: Inception',
        price: 29.99,
        category: 'filmy',
        image: 'https://static.dvdmax.pl/grafika/produkty/midi/1869797_0002.jpg?416',
      },
      {
        id: 38,
        name: 'DVD: The Office - Complete Series',
        price: 260.99,
        category: 'filmy',
        image: 'https://media.dvdmax.pl/IMG/360x460/867686_0003.jpg?256',
      },
      {
        id: 39,
        name: 'Blu-ray: The Dark Knight Trilogy',
        price: 149.99,
        category: 'filmy',
        image: 'https://media.dvdmax.pl/IMG/360x460/1240400_0005.jpg?256',
      },



    


      




    



    ];
    localStorage.setItem('products', JSON.stringify(products));
  }

}
