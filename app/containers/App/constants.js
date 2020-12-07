/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'boilerplate/App/LOAD_USERS_SUCCESS';
export const LOAD_DATA_ERROR = 'boilerplate/App/LOAD_DATA_ERROR';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'boilerplate/App/LOAD_POSTS_SUCCESS';
export const LOAD_CURRENT_USER = 'LOAD_CURRENT_USER';
export const LOAD_CURRENT_USER_SUCCESS =
  'boilerplate/App/LOAD_CURRENT_USER_SUCCESS';
export const LOAD_CURRENT_POST = 'LOAD_CURRENT_POST';
export const LOAD_CURRENT_POST_SUCCESS =
  'boilerplate/App/LOAD_CURRENT_POST_SUCCESS';
