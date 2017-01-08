import React from 'react';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import {SetTime} from './SetTime';

export const Header = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <SetTime timerLength={props.timerLength} />
        <Navbar.Toggle />
      </Navbar.Header>
      <Nav pullRight>
        <NavItem><Button bsStyle='success'>Start</Button></NavItem>
        <NavItem><Button bsStyle='info'>I I</Button></NavItem>
        <NavItem><Button bsStyle='danger'>Reset</Button></NavItem>
      </Nav>
    </Navbar>
  );
};
