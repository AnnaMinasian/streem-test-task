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
import { useParams, useRouteMatch } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { loadPosts, loadCurrentUser } from 'containers/App/actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
  makeSelectCurrentUser,
} from 'containers/App/selectors';
import Img from 'components/Img';
import saga from './saga';
import UserList from '../UsersPage/UserList';
import PostList from './PostList';
import UserContainer from './UserContainer';
import Wrapper from './Wrapper';
import LoadingIndicator from '../../components/LoadingIndicator';
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
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <div>Something went wrong, please try again!</div>;
  }
  return (
    <UserContainer>
      <UserList
        background="none"
        key={currentUser.id}
        to={`users/${currentUser.id}`}
      >
        <div>
          <Img className="user" src={currentUser.avatar} alt="" />
        </div>
        <h3>{currentUser.name}</h3>
        <div>Id:{currentUser.id}</div>
        <div>Created at: {currentUser.createdAt}</div>
        <div>Phone: {currentUser.phone}</div>
        <div>City: {currentUser.city}</div>
        <div>Role: {currentUser.role}</div>
      </UserList>
      <Wrapper>
        {posts.map(post => (
          <PostList key={post.id} to={`${url}/post/${post.id}`}>
            <Img src={post.image} alt="" />
            <div>
              <div>Id: {post.id}</div>
              <div>Created At: {post.createdAt}</div>
              <div>Content: {post.content}</div>
              <div>Edited At: {post.editedAt}</div>
            </div>
            <div />
          </PostList>
        ))}
      </Wrapper>
    </UserContainer>
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
