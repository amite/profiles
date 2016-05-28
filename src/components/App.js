
import React, { Component, PropTypes } from 'react';

class App extends Component {

  static propTypes = {
    className: PropTypes.string,
    msg: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { 'name': this.props.msg }
    this.handleClick = this.handleClick.bind(null);
  }

  handleClick(evt) {
    console.log('clicked');
  }

  render() {
    return (
       <h1 onClick={this.handleClick}>{this.state.name}</h1>
    );
  }
}

export default App;
