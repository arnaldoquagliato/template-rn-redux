import { Dispatch } from 'redux';

import { IUser, UserAction } from '../../../types/domain';
import { actionTypes } from './action-types';
import { AddUserAction, RemoveUserAction } from './actions';

export function addUser(user: IUser) {
  return (dispatch: Dispatch<AddUserAction>) => {
    dispatch({
      type: actionTypes.CREATE_USER,
      data: user,
    });
  };
}

export function removeUser(user: IUser) {
  return (dispatch: Dispatch<RemoveUserAction>) => {
    dispatch({
      type: actionTypes.DELETE_USER,
      data: user,
    });
  };
}

export function simulateRequest(action: UserAction) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
