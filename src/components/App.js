import React, { Component, PropTypes } from 'react';
import Profile from './Profile';
import { fetchProfiles } from '../api/profiles.js';

const API = 'https://randomuser.me/api/?results=5';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { profiles: [] };
  }

  componentDidMount() {
    fetchProfiles()
      .then( (data) => {
        let results = data.results;
        this.setState({
          profiles: results
        });
      });
  }

  render() {
    // console.log('inside App', this.state);
    return (
      <div>
        {this.state.profiles.map(function(profile, i) {
          return (
            <Profile key={i} data={profile} />
          );
        })}
      </div>
    );
  }
}

export default App;
