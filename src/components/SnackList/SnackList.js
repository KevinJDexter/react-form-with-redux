import React, {Component} from 'react';
import {connect} from 'react-redux';
import SnackItem from '../SnackItem/SnackItem';

const mapReduxStateToProps = (reduxState) => (
  {reduxState}
)

class SnackList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSnack: ''
    }
  }

  handleChange = (event) => {
    this.setState ({
      currentSnack: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.dispatch({
      type: 'ADD_SNACK',
      value: this.state.currentSnack
    })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.currentSnack} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
        {this.props.reduxState.reducer.map((snack, i) => <SnackItem key={i} snack={snack} />)}
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(SnackList);