import { ProjectData } from './projectData';
import { KeywordContext } from '../keywordContext';
import { KeyedCollection } from '../KeyedCollection';
import { Project } from '../project';

export class KeywordContextData {
  appStorageDate: Number;
  projectList: Array<ProjectData>;

  constructor() {
    this.projectList = new Array<ProjectData>();
  }

  static fromData(data: KeywordContextData): KeywordContext {
    const context = new KeywordContext();
    context.appStorageDate = data.appStorageDate;
    context.projectList = new KeyedCollection<Project>();
    data.projectList.forEach(function (projectData) {
      const project = ProjectData.fromData(projectData);
      context.projectList.Add(projectData.name.toLowerCase(), project);
    });
    return context;
  }

  static toData(context: KeywordContext): KeywordContextData {
    const data = new KeywordContextData();
    data.appStorageDate = context.appStorageDate;
    data.projectList = new Array<ProjectData>();
    context.projectList.Values().forEach(function (project) {
      data.projectList.push(ProjectData.toData(project));
    });
    return data;
  }
}
