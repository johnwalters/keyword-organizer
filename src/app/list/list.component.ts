import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { KeywordService } from '../keyword.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  projectList: Array<Project>;

  constructor(private keywordService: KeywordService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectList = this.keywordService.getAllProjects();
  }

}
