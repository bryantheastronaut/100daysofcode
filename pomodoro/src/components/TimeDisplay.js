import React from 'react';
import {Well} from 'react-bootstrap';

export const TimeDisplay = (props) => {
  let wellStyle = {
    width: '80vw',
    margin: '20px auto',
    minWidth: '300px',
    textAlign: 'center'
  };
  return (
    <Well style={wellStyle}>
      <h2>{props.time}</h2>
      <button onClick={() => props.btn()}>click me</button>
    </Well>
  );
};
