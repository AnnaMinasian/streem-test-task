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
import Wrapper from './Wrapper';
import saga from './saga';
import LoadingIndicator from '../../components/LoadingIndicator';

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
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <div>Something went wrong, please try again!</div>;
  }
  return (
    <Wrapper>
      <img src={currentPost.image} alt="" />
      <div>
        <div>Id: {currentPost.id}</div>
        <div>Created At: {currentPost.createdAt}</div>
        <div>Content: {currentPost.content}</div>
        <div>Edited At: {currentPost.editedAt}</div>
      </div>
      <div />
    </Wrapper>
  );
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
