import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Project } from '../project';
import { StorageService } from '../storage.service';
import { KeywordService } from '../keyword.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project = new Project();


  constructor(private storage: StorageService, private keywordService: KeywordService) {
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
    // const cleanProducts = new Array<Product>();
    // for ( const prod of this.project.products ) {
    //   // tslint:disable-next-line:curly
    //   if (!prod.asin || prod.isDeleted) continue;
    //   cleanProducts.push(prod);
    // }
    // this.project.products = cleanProducts;
    // this.storage.set(this.project.name.toLowerCase(), this.project);

    // save with keywordService
    this.keywordService.saveProject(this.project);
  }

  onLoadProject(): void {
    // const existingProject = this.storage.get(this.project.name.toLowerCase());
    // // tslint:disable-next-line:curly
    // if (!existingProject) return;
    // this.project = existingProject;

    // get with keywordService
    this.project = this.keywordService.getProject(this.project.name);
    if (!this.project) {
      this.project = new Project();
    }
  }
}
