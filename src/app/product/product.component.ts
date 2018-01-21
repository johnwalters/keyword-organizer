import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = {
    asin: "B01887A4E4",
    keywordListText: "serving tray\nserving trays\ndecorative serving trays\nclear tray"
  };
  constructor() { }

  ngOnInit() {
  }



}
