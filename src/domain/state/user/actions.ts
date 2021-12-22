import { IUser } from '../../../types/domain';
import { actionTypes } from './action-types';

export interface AddUserAction {
  type: actionTypes.CREATE_USER;
  user: IUser;
}

export interface RemoveUserAction {
  type: actionTypes.DELETE_USER;
  user: IUser;
}

export interface UpdateUserAction {
  type: actionTypes.UPDATE_USER;
  user: IUser;
}
