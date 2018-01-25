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

  process(): void  {
    // create an aggregate product
    // for each product
    //   for each keyword
    //      if exsists in keywordTotal list, then add to keyword's count, else add keyword and set count to 1
    // Once keywords counted, determine percent of products that have each keyword, and note in keyword
    // update each product count and percentage
  }
}
