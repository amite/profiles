
import React, { Component, PropTypes } from 'react';

/*eslint-disable no-console */

class App extends Component {

  static propTypes = {
    className: PropTypes.string,
    msg: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(null);
  }

  handleClick(evt) {
    console.log('clicked');
  }

  render() {
    return (
      <div className="ui text container">
        <h3 className="ui header">Breaking The Grid, Grabs Your Attention</h3>
        <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
        <a className="ui large button">Read More</a>
        <h4 className="ui horizontal header divider">
          <a href="#">Case Studies</a>
        </h4>
        <h3 className="ui header">Did We Tell You About Our Bananas?</h3>
        <p>Yes I know you probably disregarded the earlier boasts as non-sequitor filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
        <a className="ui large button">I'm Still Quite Interested</a>
      </div>
    );
  }
}

export default App;
