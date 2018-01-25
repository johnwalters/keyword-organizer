import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { Project } from '../project';
import { KeywordService } from '../keyword.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project = new Project();
  isConfirmRemovePending: boolean;


  constructor(
    private keywordService: KeywordService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    if (this.project.products.length === 0) {
      this.project.products.push(new Product());
    }
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project.name = id;
    // tslint:disable-next-line:curly
    if (!id) return;
    this.isConfirmRemovePending = false;
    this.onLoadProject();
  }

  onAddProduct(): void {
    this.project.products.push(new Product());
  }

  onDelete(): void {
    if (this.project.name) {
      this.isConfirmRemovePending = true;
      return;
    }
    this.delete();
  }

  onDeleteConfirm(): void {
    this.delete();
  }

  onDeleteCancel(): void {
    this.isConfirmRemovePending = false;
  }

  delete(): void {
    this.project.isDeleted = true;
    this.isConfirmRemovePending = false;
    this.onSaveProject();
    this.goBack();
  }

  onSaveProject(): void {
    // save with keywordService
    this.keywordService.saveProject(this.project);
  }

  onLoadProject(): void {
    // get with keywordService
    this.project = this.keywordService.getProject(this.project.name);
    if (!this.project) {
      this.project = new Project();
    }
  }

  goBack(): void {
    this.location.back();
  }
}
