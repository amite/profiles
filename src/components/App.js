import React, { Component, PropTypes } from 'react';

class App extends Component {

  static propTypes = {
    children: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
