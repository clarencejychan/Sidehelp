import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import $ from 'jquery';

import Search from '../search/search';
import './style.scss';


class Home extends Component {
  render() {
    return (
      <div className="homepage-container">
        // Navigation Bar
        <Navbar inverse staticTop collapseOnSelect fixedTop id="nav" className="navbar">
          <Navbar.Header className="navbar-header">
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        // Inner Container
        <div className="homepage-inner-container">
          <div className="logo-container">
            <h1 className="logo-text">RentYours</h1>
          </div>
          // Search Bar
          <Search />
        </div>
      </div>
    );
  }
};

export default Home;