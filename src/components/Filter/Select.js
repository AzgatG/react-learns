import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux'
import {changeSelected} from '../../AC'

import 'react-select/dist/react-select.css';


class FilterSelect extends React.Component {
  render() {
    const {articles, selected} = this.props
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))

    return (
        <Select 
          value={selected}
          options={options}
          onChange={this.changeSelection}
          multi
        />
    );
  }

   changeSelection = selection => {
    const {changeSelected} = this.props
    this.setState({selection})
    console.log(selection);
    console.log(changeSelected);
    changeSelected(selection)
  }
}

export default connect(({articles}) => ({
  articles
}), { changeSelected })(FilterSelect)