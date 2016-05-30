import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Month from '../Month';

storiesOf('Month', module)
  .add('view', () => (
    <Month year={2016}/>
  ));
