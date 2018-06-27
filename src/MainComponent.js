import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Authentication from './AuthenticationComponent';
import First from './FirstComponent';
import NavbarFeatures from './HeaderComponent';
import Profile from './ProfileComponent';

class Main extends Component
{
  render()
  {

    console.log("in main");

    const LoginPage = () => {
    return (
        <Authentication />

      );
  }


    return(
      <div>

        <NavbarFeatures />

        <Switch>
            <Route path = '/login' component = {LoginPage} />
            <Route path = '/profile' component = {Profile} />
            <Redirect to = '/login' />
        </Switch>
      </div>
    );
  }
}

export default Main;
