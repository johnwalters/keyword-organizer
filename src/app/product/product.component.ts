import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  MODE_EDIT:string = "edit";
  MODE_VIEW:string = "view";

  product: Product = {
    asin: "B01887A4E4",
    keywordListText: "serving tray\nserving trays\ndecorative serving trays\nclear tray"
  };
  editMode:string = this.MODE_EDIT;

  constructor() { }

  ngOnInit() {
  }

  onSave():void{
    this.editMode = this.MODE_VIEW;
  }

  onEnterEditMode():void{
    this.editMode = this.MODE_EDIT;
  }

}
