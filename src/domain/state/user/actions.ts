import { IUser } from '../../../types/domain';
import { actionTypes } from './action-types';

export interface AddUserAction {
  type: actionTypes.CREATE_USER;
  data: IUser;
}

export interface RemoveUserAction {
  type: actionTypes.DELETE_USER;
  data: IUser;
}

export interface UpdateUserAction {
  type: actionTypes.UPDATE_USER;
  data: IUser;
}
