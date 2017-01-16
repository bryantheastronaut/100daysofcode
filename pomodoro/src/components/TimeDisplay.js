import React from 'react';
import {Well} from 'react-bootstrap';
import {convertFromMS} from '../utils';

export const TimeDisplay = (props) => {
  let wellStyle = {
    width: '80vw',
    margin: '20px auto',
    minWidth: '300px',
    textAlign: 'center'
  };
  return (
    <Well style={wellStyle}>
      <h2>{convertFromMS(props.time)}</h2>
    </Well>
  );
};
