import React, { Component, PropTypes } from 'react';

class Profile extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let { cell, gender, email, location, login } = this.props.data;
    let { city, state } = location;
    let { username } = login;
    return (
      <div>
        <p>{username}</p>
        <p>Cell: {cell || 'No listed number'}</p>
        <p>Gender: {gender || 'No listed gender'}</p>
        <p>Email: {email || 'No listed email'}</p>
        <p>Lives in: {city} | {state} </p>
        <img src={this.props.data.picture.thumbnail} alt=""/>
        <hr/>
      </div>
    );
  }
}

export default Profile;
