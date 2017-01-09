import React from 'react';
import {Button, ButtonGroup, Well} from 'react-bootstrap';

let buttonStyle = {
  float: 'left',
  color: '#31AED4',
  margin: '17px 10px',
  fontSize: '1.75rem',
  borderRadius: '10px'
};

let displayStyle = {
  float: 'left',
  textAlign: 'center',
  padding: '15px 30px'
};

export const SetTime = (props) => {
  const MINUTES = props.timerLength / 60000;
  return (
    <div style={{marginTop: '15px'}}>
      <Button style={buttonStyle} bsSize='large' onClick={() => { props.onTimeChange('DEC')} }>-</Button>
      <Well style={displayStyle}><span style={{fontSize: '2rem', fontWeight: 'bold'}}>{MINUTES}</span><br /> min</Well>
      <Button style={buttonStyle} bsSize='large' onClick={() => { props.onTimeChange('INC')} }>+</Button>
    </div>
  );
};
