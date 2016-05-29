import React, { Component, PropTypes } from 'react';

class Profile extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data;
    return (
      <div>
        <p>{data.login.username}</p>
        <p>Cell: {data.cell || 'No listed number'}</p>
        <p>Gender: {data.gender || 'No listed gender'}</p>
        <p>Email: {data.email || 'No listed email'}</p>
        <p>Lives in: {data.location.city} | {data.location.state} </p>
        <img src={data.picture.thumbnail} alt=""/>
        <hr/>
      </div>
    );
  }
}

export default Profile;
