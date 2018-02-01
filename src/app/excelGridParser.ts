import { Product } from './product';

export class ExcelGridParser {
  products: Array<Product>;

  constructor() {
    this.products = new Array<Product>();
  }

  static toProducts(data: string): Array<Product> {
    const products = new Array<Product>();
    console.log(data);
    const rows = data.split('\n');
    let isFirstRow = true;
    // tslint:disable-next-line:forin
    for (const row in rows) {
      const cells = rows[row].split('\t');
      for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
        if (isFirstRow) {
          const prod = new Product();
          prod.asin = cells[cellIndex];
          prod.keywordListText = null;
          products.push(prod);

        } else {
          const prodToUpdate = products[cellIndex];
          prodToUpdate.keywordListText += '\n' + cells[cellIndex];
        }
      }

      isFirstRow = false;
    }
    products.forEach(function(value) {
      value.setKeywordListFromText();
    });
    return products;
  }
}
