import { KeyedCollection } from './KeyedCollection';
import { Project } from './project';
import { ProjectData } from './projectData';
import { KeywordContextData } from './keywordContextData';
import { containerEnd } from '@angular/core/src/render3/instructions';

export class KeywordContext {
  static appStorageKey = 'keywords';
  appStorageDate: Number;
  projectList: KeyedCollection<Project>;

  constructor() {
    this.projectList = new KeyedCollection<Project>();
  }

}
