/*
 * UsersPage
 *
 *
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { Link } from 'react-router-dom';
import {
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadUsers } from 'containers/App/actions';
import saga from './saga';

const key = 'users';

export function UsersPage({ loading, error, users, onLoadUsers }) {
  useInjectSaga({ key, saga });
  useEffect(() => {
    if (!loading && users.length === 0) {
      onLoadUsers();
    }
  });
  if (error) return `Error! ${error}`;
  if (loading) {
    return null;
  }

  if (error !== false) {
    return <div>Something went wrong, please try again!</div>;
  }

  if (users !== false) {
    return users.map(user => (
      <Link key={user.id} to={`users/${user.id}`}>
        <div>{user.name}</div>
        <div>
          <img src={user.avatar} alt="" />
        </div>
      </Link>
    ));
  }

  return null;
}

UsersPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  users: PropTypes.array,
  onLoadUsers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadUsers: () => dispatch(loadUsers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UsersPage);
