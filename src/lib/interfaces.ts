export interface ISimplyNewsPost {
  title: string;
  smallDescription: string;
  currentSlug: string;
  publishedAt: string;
  titleImage: any;
}

export interface IFullNewsPost extends ISimplyNewsPost {
  content: any;
}
