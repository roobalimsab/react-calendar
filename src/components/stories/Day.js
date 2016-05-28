import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Day from '../Day';

storiesOf('Day', module)
  .add('view', () => (
    <Day date="1"/>
  ));
