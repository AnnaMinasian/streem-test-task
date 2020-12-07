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
import {
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadUsers } from 'containers/App/actions';
import Img from 'components/Img';
import saga from './saga';
import Wrapper from './Wrapper';
import UserList from './UserList';
import UsersContainer from './UsersContainer';

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
    return (
      <UsersContainer>
        {users.map(user => (
          <Wrapper key={user.id}>
            <UserList key={user.id} to={`users/${user.id}`}>
              <div>
                <Img src={user.avatar} alt="" />
              </div>
              <h3>{user.name}</h3>
              <div>Id:{user.id}</div>
              <div>Created at: {user.createdAt}</div>
              <div>Phone: {user.phone}</div>
              <div>City: {user.city}</div>
              <div>Role: {user.role}</div>
            </UserList>
          </Wrapper>
        ))}
      </UsersContainer>
    );
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
