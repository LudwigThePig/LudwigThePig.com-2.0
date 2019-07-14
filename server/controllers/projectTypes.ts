
export enum Categories {
  'client',
  'typescript',
  'frontend',
  'fullstack',
  'game',
}

export interface IGetParams {
  limit?: number;
  categories?: Array<Categories> | Categories;
  name?: string;
  id?: number;
  [key: string]: any;
}

export interface IPostBody {
  name: string;
  description?: string;
  url: string;
  image_url?: string;
  created: string;
  updated?: string;
  categories: Array<Categories>;
  [key: string]: any;
}

export interface IPutBody {
  id: number;
  name?: string;
  description?: string;
  url?: string;
  image_url?: string;
  created?: string;
  updated?: string;
  categories?: Array<Categories>;
  [key: string]: any;
}

export interface IDeleteBody {
  id: number;
}