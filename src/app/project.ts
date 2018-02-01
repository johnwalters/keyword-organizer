import { Product } from './product';
import { KeywordMeta } from './keywordMeta';
import * as _ from 'underscore';

export class Project {
  name: string;
  asin: string;
  products: Array<Product>;
  isDeleted: boolean;
  totals: Product;

  constructor() {
    (this.name = null),
      (this.asin = null),
      (this.products = new Array<Product>());
    this.isDeleted = false;
    this.totals = new Product();
  }

  process(): void {
    // create an aggregate product
    const aggregateProduct = new Product();
    const productCount = this.products.length;
    // for each product
    this.products.forEach(function(product) {
      //   for each keyword
      product.keywordList.forEach(function(keyword) {
        //      if exsists in keywordTotal list, then add to keyword's count, else add keyword and set count to 1
        // tslint:disable-next-line:curly
        if (!keyword) return;
        const keywordTreated = keyword.toLowerCase();
        if (aggregateProduct.keywordTotalsList.ContainsKey(keywordTreated)) {
          const keywordTotal = aggregateProduct.keywordTotalsList.Item(
            keywordTreated
          );
          keywordTotal.count++;
          aggregateProduct.keywordTotalsList[keywordTreated] = keywordTotal;
        } else {
          const keywordTotalToAdd = new KeywordMeta();
          keywordTotalToAdd.phrase = keywordTreated;
          keywordTotalToAdd.count = 1;
          keywordTotalToAdd.percent = 0.0;
          aggregateProduct.keywordTotalsList.Add(
            keywordTreated,
            keywordTotalToAdd
          );
        }
      });
    });
    // Once all products keywords counted, determine percent of products that have each keyword, and note in keyword
    // update each product count and percentage

    aggregateProduct.keywordTotalsList.Values().forEach(function(meta) {
      const pct = (meta.count / productCount) * 100;
      const percent = Math.ceil(pct);
      const keywordTotal = aggregateProduct.keywordTotalsList.Item(meta.phrase);
      keywordTotal.percent = pct;
      aggregateProduct.keywordTotalsList.Add(meta.phrase, keywordTotal);
    });

    this.totals = aggregateProduct;
  }

  totalsList(): KeywordMeta[] {
    let totalsList = this.totals.keywordTotalsList.Values();
    totalsList = _.sortBy(totalsList, 'percent').reverse();
    return totalsList;
  }
}
