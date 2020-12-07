import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectGlobal = state => state.global || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectUsers = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.users,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );
const makeSelectPosts = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.posts,
  );
const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );
export {
  makeSelectLocation,
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
  makeSelectCurrentUser,
};
