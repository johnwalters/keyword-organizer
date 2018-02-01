import { Injectable } from '@angular/core';
import { LocalStorageService } from './localStorageService';
import { KeywordContext } from './keywordContext';
import { KeywordContextData } from './serialization/keywordContextData';
import { Project } from './project';
import { Product } from './product';
import { appendNgContent } from '@angular/core/src/view/ng_content';

@Injectable()
export class KeywordService {
  private _context: KeywordContext;

  constructor(private storage: LocalStorageService) {}

  getProject(projectName: string): Project {
    const projectNameKey = projectName.toLowerCase();
    if (!this.appContext().projectList.ContainsKey(projectNameKey)) {
      return null;
    }
    const project = this.appContext().projectList.Item(projectNameKey);
    return project;
  }

  getAllProjects(): Array<Project> {
    const projectList = new Array<Project>();
    this.appContext()
      .projectList.Values()
      .forEach(function(project) {
        projectList.push(project);
      });
    return projectList;
  }

  saveProject(project: Project): void {
    const projectNameKey = project.name.toLowerCase();

    if (project.isDeleted) {
      this.appContext().projectList.Remove(projectNameKey);
    } else {
      const activeProducts = new Array<Product>();
      for (const prod of project.products) {
        // tslint:disable-next-line:curly
        if (!prod.asin || prod.isDeleted) continue;
        activeProducts.push(prod);
      }
      project.products = activeProducts;

      this.appContext().projectList.Add(projectNameKey, project);
    }

    this.appContext().appStorageDate = Date.now();

    // serialize and save
    const contextData = KeywordContextData.toData(this.appContext());
    this.storage.write(
      KeywordContext.appStorageKey,
      JSON.stringify(contextData)
    );
  }

  private appContext(): KeywordContext {
    if (!this._context) {
      // load from storage
      const existingAppContextData = this.storage.readObject<
        KeywordContextData
      >(KeywordContext.appStorageKey);
      if (!existingAppContextData) {
        this._context = new KeywordContext();
        return this._context;
      }
      this._context = KeywordContextData.fromData(existingAppContextData);
    }
    return this._context;
  }
}
