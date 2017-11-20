import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends React.Component {
  static propTypes = {
    counter: PropTypes.number,
  };

  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick = {this.handleIncrement}>Inc</button>
      </div>
    );
  }

  handleIncrement = () => {
    const {increment} = this.props
    increment()
  }  
}

function mapStateToProps(state) {
  return {
    counter: state.count
  }
}

const mapToDispatch = {increment}
// первый вариант
// const decorator = connect(mapStateToProps, mapToDispatch);

// export default decorator(Counter)
// Второй вариант более лучший
export default connect(mapStateToProps, mapToDispatch)(Counter)