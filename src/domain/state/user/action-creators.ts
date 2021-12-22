import { IUser, UserAction } from '../../../types/domain';
import { actionTypes } from './action-types';
import { Dispatch } from 'redux';
import { AddUserAction, RemoveUserAction, UpdateUserAction } from './actions';
export function addUser(user: IUser) {
  return (dispatch: Dispatch<AddUserAction>) => {
    dispatch({
      type: actionTypes.CREATE_USER,
      user: user,
    });
  };
  // const action: UserAction = {

  // }

  // return simulateRequest(action)
}

export function removeUser(user: IUser) {
  const action: UserAction = {
    type: actionTypes.DELETE_USER,
    user: user,
  };
  return simulateRequest(action);
}

export function simulateRequest(action: UserAction) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
