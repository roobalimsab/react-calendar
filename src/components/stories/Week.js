import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Week from '../Week';

storiesOf('Week', module)
  .add('view', () => (
    <Week />
  ));
