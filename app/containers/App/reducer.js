import produce from 'immer';
import { LOAD_USERS, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS } from './constants';

export const initialState = {
  users: [],
  posts: [],
  currentUser: {},
  currentPost: {},
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USERS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_USERS_SUCCESS:
        draft.loading = false;
        draft.users = action.users;
        break;
      case LOAD_USERS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
