import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { KeywordService } from '../keyword.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ExcelGridParser } from '../excelGridParser';


@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.css']
})
export class CellsComponent implements OnInit {
  project: Project;
  copiedText: string;

  constructor(
    private keywordService: KeywordService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
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

  onProcess(): void {
    console.log(this.copiedText);
    this.project.products = ExcelGridParser.toProducts(this.copiedText);
    this.project.process();
    this.keywordService.saveProject(this.project);
    this.router.navigateByUrl('/totals/' + this.project.name);
  }

}
