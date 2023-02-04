import { IUser } from "./User.types";

export interface IComments {
  [slugId: string]: IComment[];
}

export interface IComment {
  id: number;
  content: string;
  user: IUser;
  replies?: IReply[];
}

export interface IReply {
  content: string;
  replyingTo: string;
  user: IUser;
}
