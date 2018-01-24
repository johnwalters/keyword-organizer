import { KeyedCollection } from './KeyedCollection';
import { Project } from './project';
import { KeywordContextData } from './keywordContextData';
import { containerEnd } from '@angular/core/src/render3/instructions';

export class KeywordContext {
  static appStorageKey = 'keywords';
  appStorageDate: Number;
  projectList: KeyedCollection<Project>;

  constructor() {
    this.projectList = new KeyedCollection<Project>();
  }

  static fromData(data: KeywordContextData): KeywordContext {
    const context = new KeywordContext();
    context.appStorageDate = data.appStorageDate;
    context.projectList = new KeyedCollection<Project>();
    data.projectList.forEach(function (project) {
      context.projectList.Add(project.name.toLowerCase(), project);
    });
    return context;
  }

  static toData(context: KeywordContext): KeywordContextData {
    const data = new KeywordContextData();
    data.appStorageDate = context.appStorageDate;
    data.projectList = new Array<Project>();
    context.projectList.Values().forEach(function (project) {
      data.projectList.push(project);
    });
    return data;
  }
}
