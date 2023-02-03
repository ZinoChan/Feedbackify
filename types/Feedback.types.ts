import { IComment } from "./Comment.types";

export interface IFeedback {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: IComment[];
}
