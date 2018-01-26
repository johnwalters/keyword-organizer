import { KeywordMeta } from '../keywordMeta';
import { Product } from '../product';
import { KeyedCollection } from '../KeyedCollection';

export class ProductData {
    asin: string;
    keywordListText: string;
    keywordList: Array<string>;

    isDeleted: boolean;

    constructor() {
      this.asin = null,
      this.keywordListText = null;
      this.keywordList = new Array<string>();

      this.isDeleted = false;
    }

    static toData(product: Product): ProductData {
      const data = new ProductData();
      data.asin = product.asin;
      data.isDeleted = product.isDeleted;
      data.keywordListText = product.keywordListText;
      data.keywordList = product.keywordList;

      return data;
    }

    static fromData(data: ProductData): Product {
      const product = new Product();
      product.asin = data.asin;
      product.isDeleted = data.isDeleted;
      product.keywordListText = data.keywordListText;
      product.keywordList = data.keywordList;
      product.keywordTotalsList = new KeyedCollection<KeywordMeta>();

      return product;
    }
  }
