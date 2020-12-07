import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_DATA_ERROR,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_CURRENT_USER,
  LOAD_CURRENT_USER_SUCCESS,
  LOAD_CURRENT_POST,
  LOAD_CURRENT_POST_SUCCESS,
} from './constants';

export function loadUsers() {
  return {
    type: LOAD_USERS,
  };
}

export function usersLoaded(users) {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
}

export function dataLoadingError(error) {
  return {
    type: LOAD_DATA_ERROR,
    error,
  };
}

export function loadPosts(userId) {
  return {
    type: LOAD_POSTS,
    userId,
  };
}

export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}

export function loadCurrentUser(userId) {
  return {
    type: LOAD_CURRENT_USER,
    userId,
  };
}

export function currentUserLoaded(currentUser) {
  return {
    type: LOAD_CURRENT_USER_SUCCESS,
    currentUser,
  };
}

export function loadCurrentPost(userId, postId) {
  return {
    type: LOAD_CURRENT_POST,
    userId,
    postId,
  };
}

export function currentPostLoaded(currentPost) {
  return {
    type: LOAD_CURRENT_POST_SUCCESS,
    currentPost,
  };
}
