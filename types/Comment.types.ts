import { IUser } from "./User.types";

export interface IComment {
  id: number;
  content: string;
  user: IUser;
}
