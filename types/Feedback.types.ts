export interface IFeedbacks {
  [slug: string]: IFeedback[];
}

export interface IFeedback {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
}
