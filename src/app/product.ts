import { KeywordMeta } from './keywordMeta';
import { KeyedCollection } from './KeyedCollection';
import * as _ from 'underscore';

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

    setKeywordListFromText() {
      this.keywordList = this.keywordListText.split('\n');
      this.keywordList = _.uniq(this.keywordList);
      const cleanedKeywordList = new Array<string>();
      this.keywordList.forEach(function (keyword){
        // tslint:disable-next-line:curly
        if (keyword && keyword.length > 0 && keyword !== 'null') {
          cleanedKeywordList.push(keyword);
        }
      });
      this.keywordList = cleanedKeywordList;
    }
  }
