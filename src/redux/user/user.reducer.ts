import { UserActionTypes } from './user.types'

const INITAL_STATE = {
    currentUser: null,
}

const userReducer = (state: any = INITAL_STATE, action: any) => {
    switch (action.type) {
      case UserActionTypes.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload,
        };

      default:
        return state;
    }
};

export default userReducer;