import React from 'react';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import {SetTime} from './SetTime';

export const Header = (props) => {
  let buttonStyle = {
    marginTop: '15px'
  }
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <SetTime
          timerLength={props.timerLength}
          onTimeChange={props.onTimeChange}
        />
        <Navbar.Toggle />
      </Navbar.Header>
      <Nav pullRight>
        <NavItem><Button
          bsSize='large'
          style={buttonStyle}
          bsStyle='success'
        >
          Start
        </Button></NavItem>
        <NavItem><Button
          bsSize='large'
          style={buttonStyle}
          bsStyle='info'
        >
          I I
        </Button></NavItem>
        <NavItem><Button
          bsSize='large'
          style={buttonStyle}
          bsStyle='danger'
        >
          Reset
        </Button></NavItem>
      </Nav>
    </Navbar>
  );
};
