import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Project } from '../project';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project = new Project();


  constructor(private storage: StorageService) {
    if (this.project.products.length === 0) {
      this.project.products.push(new Product());
    }
  }

  ngOnInit() {
  }

  onAddProduct(): void {
    this.project.products.push(new Product());
  }

  onSaveProject(): void {
    this.storage.set(this.project.name, this.project);
  }

  onLoadProject(): void {
    this.project = this.storage.get(this.project.name);
  }
}
