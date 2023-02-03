export interface IProjects {
  [slug: string]: IProject;
}

export interface IProject {
  id: string;
  category: string;
  name: string;
  slug: string;
  img: string;
  linkToPage: string;
  linkToSrc: string;
  description: string;
  tools: string[];
}
