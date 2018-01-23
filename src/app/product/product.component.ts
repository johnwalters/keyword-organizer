import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  MODE_EDIT = 'edit';
  MODE_VIEW = 'view';
  listEditMode: string = this.MODE_EDIT;
  asinEditMode: string = this.MODE_EDIT;

  // product: Product = {
  //   asin: 'B01887A4E4',
  //   keywordListText: 'serving tray\nserving trays\ndecorative serving trays\nclear tray',
  //   keywordList: new Array<string>()
  // };

  @Input() product: Product;

  constructor() {

   }

  ngOnInit() {
    this.setModes();
  }

  onSaveList(): void {
    // tslint:disable-next-line:curly
    if (!this.product.keywordListText) return;
    this.product.keywordList = this.product.keywordListText.split('\n');
    this.listEditMode = this.MODE_VIEW;
    this.onSaveAsin(); // close editing on asin as well
  }

  onEnterListEditMode(): void {
    this.listEditMode = this.MODE_EDIT;
  }

  onSaveAsin(): void {
    this.asinEditMode = this.MODE_VIEW;
  }

  onEnterAsinEditMode(): void {
    this.asinEditMode = this.MODE_EDIT;
  }

  isNew(): boolean {
    return !this.product.asin;
  }

  setModes(): void {
    this.listEditMode = !this.product.asin ? this.MODE_EDIT : this.MODE_VIEW;
    this.asinEditMode = !this.product.asin ? this.MODE_EDIT : this.MODE_VIEW;
  }

}
