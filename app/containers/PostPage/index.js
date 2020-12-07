import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { loadCurrentPost } from 'containers/App/actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectCurrentPost,
} from 'containers/App/selectors';
import saga from './saga';

const key = 'post';

export function PostPage({ loading, error, currentPost, onLoadCurrentPost }) {
  useInjectSaga({ key, saga });
  const { userId, postId } = useParams();
  useEffect(() => {
    if (!loading && Object.keys(currentPost).length === 0) {
      onLoadCurrentPost(userId, postId);
    }
  });
  if (error) return `Error! ${error}`;
  if (loading) {
    return null;
  }

  if (error !== false) {
    return <div>Something went wrong, please try again!</div>;
  }
  return <h1>{currentPost.content}</h1>;
}

PostPage.propTypes = {
  loading: PropTypes.bool,
  currentPost: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoadCurrentPost: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  currentPost: makeSelectCurrentPost(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadCurrentPost: (userId, postId) =>
      dispatch(loadCurrentPost(userId, postId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PostPage);
