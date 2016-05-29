import React, { Component, PropTypes } from 'react';
import Profile from './Profile';


/*eslint-disable no-console */

const API = 'https://randomuser.me/api/?results=50';
class App extends Component {

    constructor(props) {
      super(props);
      this.state = { profiles: [] };
    }

    componentDidMount() {
      this.fetchProfile();
    }

    fetchProfile() {
      let url = API;
      fetch(url)
        .then( (res) => res.json() )
        .then( (data) => {
          let results = data.results;
          this.setState({
            profiles: results 
          });
        })
        .catch( (error) => console.log('Oops! . There Is A Problem', error) );
    }

    render() {
      console.log('inside App', this.state);
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
