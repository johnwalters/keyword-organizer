import { Product } from './product';

export class Project {
  name: string;
  asin: string;
  products: Array<Product>;
  isDeleted: boolean;

  constructor() {
    this.name = null,
    this.asin = null,
    this.products = new Array<Product>();
    this.isDeleted = false;
  }
}
