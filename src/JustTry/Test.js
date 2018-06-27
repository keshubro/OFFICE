import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class NavbarFeatures extends React.Component {




    render() {
        return (
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    <Nav navbar>
                          <NavItem>
                              <NavLink className="nav-link"  to='/login'><span className="fa fa-home fa-lg"></span> Login</NavLink>
                          </NavItem>

                          <NavItem>
                              <NavLink className="nav-link" to='/profile'><span className="fa fa-address-card fa-lg"></span> Profile</NavLink>
                          </NavItem>
                   </Nav>
                </Navbar>

        );
    }
}

export default NavbarFeatures;
