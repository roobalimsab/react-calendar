import React from 'react';
import Week from './Week';

export default class Month extends React.Component {

  calculateDaysEachWeek(year = new Date().getFullYear(), month = new Date().getMonth()) {
      let numberOfDays = new Date(year, month + 1, 0).getDate();
      let startingDay = new Date(year, month, 1).getDay();
      let days = [...Array(numberOfDays)].map((x, i) => i + 1);

      for(let i = 0; i < startingDay; i++) {
        days.unshift(0);
      }

      let weeks = [];

      for(let i=0; i<=days.length; i+=7) {
        weeks.push(days.slice(i, i+7));
      }

      return weeks.map(week => <Week days={week} />);
  }

  render() {
    return (
      <div>
        {this.calculateDaysEachWeek(this.props.year, this.props.month)}
      </div>
    )
  }
}
