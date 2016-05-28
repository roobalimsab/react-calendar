import React from 'react';
import Day from './Day';

export default class Week extends React.Component {
  renderDates() {
    return this.props.days.map((x, i) => <Day date={x} />)
  }

  render() {
    return (
      <div>
        {this.renderDates()}
      </div>
    )
  }
}
