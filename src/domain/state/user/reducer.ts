import { IUser, UserAction, UserListState } from '../../../types/domain';
import { actionTypes } from './action-types';

const initialState: UserListState = {
  users: [],
};

const userReducer = (
  state: UserListState = initialState,
  action: UserAction
): UserListState => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      const newUser: IUser = {
        id: Math.random(),
        name: action.user.name,
      };

      return {
        ...state,
        users: state.users.concat(newUser),
      };
    case actionTypes.DELETE_USER:
      const updatedUser: IUser[] = state.users.filter(
        (user) => user.id !== action.user.id
      );
      return {
        ...state,
        users: updatedUser,
      };
  }
  return state;
};

export default userReducer;
