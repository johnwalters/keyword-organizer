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
    const allProjects = this.keywordService.getAllProjects();
    const activeProjects = new Array<Project>();
    allProjects.forEach( function (value) {
        // tslint:disable-next-line:curly
        if (!value.isDeleted) {
          activeProjects.push(value);
        }
    }

  );
  // this.projectList = allProjects;
  this.projectList = activeProjects;
  }

}
