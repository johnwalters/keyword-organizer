import { Product } from './product';

export class Project {
  name: string;
  asin: string;
  products: Array<Product>;

  constructor() {
    this.name = null,
    this.asin = null,
    this.products = new Array<Product>();
  }
}
