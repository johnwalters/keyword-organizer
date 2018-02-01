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
  isNew: boolean;
  errorMessage: string;


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
    this.isNew = true;
    this.errorMessage = null;
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
    this.errorMessage = null;
    // check if already there by name if saving a new project
    if (this.isNew) {
      const existingProject = this.keywordService.getProject(this.project.name);
      if (existingProject) {
        // TODO: alert error
        this.errorMessage = 'Project with that name already exists';
        return;
      }
    }

    // save with keywordService
    this.keywordService.saveProject(this.project);
    this.isNew = false;
  }

  onLoadProject(): void {
    // get with keywordService
    this.project = this.keywordService.getProject(this.project.name);
    if (!this.project) {
      this.project = new Project();
      this.isNew = true;
    } else {
      this.isNew = false;
    }
  }

  goBack(): void {
    this.location.back();
  }
}
