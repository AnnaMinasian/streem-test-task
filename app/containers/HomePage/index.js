/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import messages from './messages';
import Wrapper from './Wrapper';

export default function HomePage() {
  return (
    <Wrapper>
      <h1>
        <FormattedMessage {...messages.header1} />
      </h1>
      <h2>
        <FormattedMessage {...messages.header2} />
      </h2>
      <Link to="/users">
        <Button type="button">
          <FormattedMessage {...messages.button} />
        </Button>
      </Link>
    </Wrapper>
  );
}
