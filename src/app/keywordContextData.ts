import { Project } from './project';

export class KeywordContextData {
  appStorageDate: Number;
  projectList: Array<Project>;

  constructor() {
    this.projectList = new Array<Project>();
  }
}
