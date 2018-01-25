import { KeywordMeta } from './keywordMeta';
import { KeyedCollection } from './KeyedCollection';

export class Product {
    asin: string;
    keywordListText: string;
    keywordList: Array<string>;
    keywordTotalsList: KeyedCollection<KeywordMeta>;
    isDeleted: boolean;

    constructor() {
      this.asin = null,
      this.keywordListText = null;
      this.keywordList = new Array<string>();
      this.keywordTotalsList = new KeyedCollection<KeywordMeta>();
      this.isDeleted = false;
    }
  }
