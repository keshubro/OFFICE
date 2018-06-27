import React, { Component } from 'react';
import cookie from 'react-cookies';

class Profile extends Component
{
  constructor()
  {
    super();

  }



  render()
  {

    console.log("in profile");
    if(this.props.value != null)
    {
      return(
        <div>{this.props.value}</div>
      );
    }

    return(
      <div>You are not logged in</div>
    );

  }
}

export default Profile;
