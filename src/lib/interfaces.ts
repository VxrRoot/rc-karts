export interface ISimplyNewsPost {
  title: string;
  smallDescription: string;
  currentSlug: string;
  publishedAt: string;
  titleImage: any;
  count: number;
}

export interface IFullNewsPost extends ISimplyNewsPost {
  content: any;
}
