import React from 'react';
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import {SetTime} from './SetTime';

export const Header = (props) => {
  let buttonStyle = {
    marginTop: '15px'
  }
  let icon = (props.paused) ? '|>' : 'I I';
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
          onClick={props.onStartTimer}
        >
          Start
        </Button></NavItem>
        <NavItem><Button
          bsSize='large'
          style={buttonStyle}
          bsStyle='info'
          onClick={props.onPauseTimer}
        >
          {icon}
        </Button></NavItem>
        <NavItem><Button
          bsSize='large'
          style={buttonStyle}
          bsStyle='danger'
          onClick={props.onResetTimer}
        >
          Reset
        </Button></NavItem>
      </Nav>
    </Navbar>
  );
};
