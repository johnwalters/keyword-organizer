import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { KeywordService } from '../keyword.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {
  project: Project;
  constructor(
    private keywordService: KeywordService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = new Project();
    this.project.name = id;
    // tslint:disable-next-line:curly
    if (!id) return;
    this.onLoadProject();
  }


  onLoadProject(): void {
    // get with keywordService
    this.project = this.keywordService.getProject(this.project.name);
    if (!this.project) {
      this.project = new Project();
    }
  }

}
