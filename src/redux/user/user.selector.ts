import { createSelector } from "reselect";
import { State } from "../../entities/redux/state";

const selectUser = (state: State) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
