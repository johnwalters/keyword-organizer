import { ProductData } from './productData';
import { Project } from '../project';
import { KeyedCollection } from '../KeyedCollection';
import { Product } from '../product';

export class ProjectData {
  name: string;
  asin: string;
  products: Array<ProductData>;
  isDeleted: boolean;

  constructor() {
    this.name = null,
    this.asin = null,
    this.products = new Array<ProductData>();
    this.isDeleted = false;
  }

  static toData(project: Project): ProjectData {
    const data = new ProjectData();
    data.asin = project.asin;
    data.isDeleted = project.isDeleted;
    data.name = project.name;
    data.products = new Array<ProductData>();
    project.products.forEach(function (value) {
      // get productData from product
      data.products.push(ProductData.toData(value));
    });
    return data;
  }

  static fromData(data: ProjectData): Project {
    const project = new Project();
    project.asin = data.asin;
    project.isDeleted = data.isDeleted;
    project.name = data.name;
    project.products = new Array<Product>();
    data.products.forEach(function (value) {
      project.products.push(ProductData.fromData(value));
    });
    return project;
  }

}
