import React from 'react';
// components
import DateRange from './DateRange'
import FilterSelect from './Select'


export default class Filtes extends React.Component {
  render() {
    return (
      <div>
        <DateRange />
        <FilterSelect />
      </div>
    );
  }
}
