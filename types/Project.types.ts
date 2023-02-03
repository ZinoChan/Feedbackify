import { IFeedback } from "./Feedback.types";

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
  feedbacks: IFeedback[];
}
