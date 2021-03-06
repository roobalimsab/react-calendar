import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Week from '../Week';

storiesOf('Week', module)
  .add('view', () => (
    <Week days={[...Array(7)].map((x, i) => i)}/>
  ));
