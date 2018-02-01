import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { Project } from '../project';

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
  isConfirmRemovePending: boolean;

  // product: Product = {
  //   asin: 'B01887A4E4',
  //   keywordListText: 'serving tray\nserving trays\ndecorative serving trays\nclear tray',
  //   keywordList: new Array<string>()
  // };

  @Input() product: Product;
  @Input() parentProject: Project;

  constructor() {

   }

  ngOnInit() {
    this.setModes();
    this.isConfirmRemovePending = false;
  }

  onSaveList(): void {
    // tslint:disable-next-line:curly
    if (!this.product.keywordListText) return;
    this.product.setKeywordListFromText();
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

  onDelete(): void {
    if (this.product.asin) {
      this.isConfirmRemovePending = true;
      return;
    }
    this.product.isDeleted = true;
    this.isConfirmRemovePending = false;
  }

  onDeleteConfirm(): void {
    this.product.isDeleted = true;
    this.isConfirmRemovePending = false;
  }

  onDeleteCancel(): void {
    this.isConfirmRemovePending = false;
  }

  isNew(): boolean {
    return !this.product.asin;
  }

  setModes(): void {
    this.listEditMode = !this.product.asin ? this.MODE_EDIT : this.MODE_VIEW;
    this.asinEditMode = !this.product.asin ? this.MODE_EDIT : this.MODE_VIEW;
  }

  // onRemove(): void {
  //   this.product = null;
  // }

}
