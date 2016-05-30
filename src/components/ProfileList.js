import React, { Component, PropTypes } from 'react';
import { fetchProfiles } from '../api/profilesApi.js';
import Profile from './Profile';

class ProfileList extends Component {
    static propTypes = {
      className: PropTypes.string
    };

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

export default ProfileList;
