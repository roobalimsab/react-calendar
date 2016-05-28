import React from 'react';
import Week from './Week';

export default class Month extends React.Component {
  render() {
    return (
      <div>
        <Week days={["1", "2"]} />
        <Week days={["3", "4"]} />
      </div>
    )
  }
}
