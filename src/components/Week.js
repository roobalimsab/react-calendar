import React from 'react';
import Day from './Day';

export default class Week extends React.Component {
  renderDates() {
    return [...Array(7)].map((x, i) => <Day date={i} />)
  }

  render() {
    return (
      <div>
        {this.renderDates()}
      </div>
    )
  }
}
