/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';

export default function HomePage() {
  return (
    <Wrapper>
      <h3>
        <FormattedMessage {...messages.header} />
      </h3>
      <Link to="/users">
        <button type="button">
          <FormattedMessage {...messages.button} />
        </button>
      </Link>
    </Wrapper>
  );
}
