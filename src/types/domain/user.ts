export interface IUser {
  name: string;
  id: number;
}

export type UserListState = {
  users: IUser[];
};

export type UserAction = {
  type: string;
  data: IUser;
};
