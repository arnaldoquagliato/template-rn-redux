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
        name: action.data.name,
      };

      return {
        ...state,
        users: state.users.concat(newUser),
      };
    case actionTypes.DELETE_USER:
      const updatedUser: IUser[] = state.users.filter(
        (user) => user.id !== action.data.id
      );
      return {
        ...state,
        users: updatedUser,
      };
    default:
      return state;
  }
};

export default userReducer;
