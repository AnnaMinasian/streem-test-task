/*
 * UserPage
 *
 *
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { loadPosts, loadCurrentUser } from 'containers/App/actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
  makeSelectCurrentUser,
} from 'containers/App/selectors';
import saga from './saga';
const key = 'user';

export function UserPage({
  loading,
  error,
  posts,
  currentUser,
  onLoadCurrentUser,
  onLoadPosts,
}) {
  useInjectSaga({ key, saga });
  const { userId } = useParams();
  const { url } = useRouteMatch();
  useEffect(() => {
    if (
      !loading &&
      posts.length === 0 &&
      Object.keys(currentUser).length === 0
    ) {
      onLoadCurrentUser(userId);
      onLoadPosts(userId);
    }
  });
  if (error) return `Error! ${error}`;
  if (loading) {
    return null;
  }

  if (error !== false) {
    return <div>Something went wrong, please try again!</div>;
  }
  return (
    <div>
      <div>{currentUser.name}</div>
      {posts.map(post => (
        <Link key={post.id} to={`${url}/post/${post.id}`}>
          <div>{post.createdAt}</div>
          <div>{post.content}</div>
          <div>{post.editedAt}</div>
          <div>
            <img src={post.image} alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
}

UserPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoadPosts: PropTypes.func,
  posts: PropTypes.array,
  currentUser: PropTypes.object,
  onLoadCurrentUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  posts: makeSelectPosts(),
  currentUser: makeSelectCurrentUser(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadPosts: userId => dispatch(loadPosts(userId)),
    onLoadCurrentUser: userId => dispatch(loadCurrentUser(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UserPage);
