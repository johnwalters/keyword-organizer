import { KeywordMeta } from './keywordMeta';
import { Product } from './product';
import { KeyedCollection } from './KeyedCollection';

export class ProductData {
    asin: string;
    keywordListText: string;
    keywordList: Array<string>;
    keywordTotalsList: Array<KeywordMeta>;
    isDeleted: boolean;

    constructor() {
      this.asin = null,
      this.keywordListText = null;
      this.keywordList = new Array<string>();
      this.keywordTotalsList = new Array<KeywordMeta>();
      this.isDeleted = false;
    }

    static toData(product: Product): ProductData {
      const data = new ProductData();
      data.asin = product.asin;
      data.isDeleted = product.isDeleted;
      data.keywordListText = product.keywordListText;
      data.keywordList = product.keywordList;
      data.keywordTotalsList = new Array<KeywordMeta>();
      product.keywordTotalsList.Values().forEach(function (value) {
          data.keywordTotalsList.push(value);
      });
      return data;
    }

    static fromData(data: ProductData): Product {
      const product = new Product();
      product.asin = data.asin;
      product.isDeleted = data.isDeleted;
      product.keywordListText = data.keywordListText;
      product.keywordList = data.keywordList;
      product.keywordTotalsList = new KeyedCollection<KeywordMeta>();
      data.keywordTotalsList.forEach(function (value) {
          product.keywordTotalsList.Add(value.phrase, value);
      });
      return product;
    }
  }
