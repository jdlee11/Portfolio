import React from 'react';

const Profile = React.createClass({
  render: function(){
    return (
      <div className="profile-container">
        <p>{'Profile for ' + this.props.name}</p>
      </div>
    )
  }
});

export default Profile;
