import produce from 'immer';
import {
  LOAD_USERS,
  LOAD_DATA_ERROR,
  LOAD_USERS_SUCCESS,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_CURRENT_USER,
  LOAD_CURRENT_USER_SUCCESS,
  LOAD_CURRENT_POST,
  LOAD_CURRENT_POST_SUCCESS,
} from './constants';

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
      case LOAD_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case LOAD_POSTS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loading = false;
        draft.posts = action.posts;
        break;
      case LOAD_CURRENT_USER:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_CURRENT_USER_SUCCESS:
        draft.loading = false;
        draft.currentUser = action.currentUser;
        break;
      case LOAD_CURRENT_POST:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_CURRENT_POST_SUCCESS:
        draft.loading = false;
        draft.currentPost = action.currentPost;
        break;
    }
  });

export default appReducer;
