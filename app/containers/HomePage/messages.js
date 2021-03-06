/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header1: {
    id: `${scope}.header`,
    defaultMessage: 'Hi, my name is Anna Minasian!',
  },
  header2: {
    id: `${scope}.header`,
    defaultMessage: 'This is my test task for Streem.',
  },
  button: {
    id: `${scope}.button`,
    defaultMessage: 'Show users',
  },
});
