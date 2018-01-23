import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = new Array<Product>();

  constructor() {
    if (this.products.length === 0) {
      this.products.push(new Product());
    }
  }

  ngOnInit() {
  }

  onAddProduct(): void {
    this.products.push(new Product());
  }

}
