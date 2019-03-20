import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import store from '../redux/store';

import TestConnected, { Test } from './Test';

const stories = storiesOf('Test', module);
stories
  .addDecorator(withInfo)
  .addParameters({
    info: {
      propTables: [Test],
      propTablesExclude: [Provider, TestConnected]
    },
  })
  .addDecorator(story => (<Provider store={store}>{story()}</Provider>))
  .add('default', () => (<TestConnected
    label={text('Label', 'Hello world')}
  />));
