export class Product {
    asin: string;
    keywordListText: string;
    keywordList: Array<string>;

    constructor() {
      this.asin = null,
      this.keywordListText = null;
      this.keywordList = new Array<string>();
    }
  }
