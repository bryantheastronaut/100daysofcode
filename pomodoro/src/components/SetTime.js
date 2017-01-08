import React from 'react';
import {Button} from 'react-bootstrap';

export const SetTime = (props) => {
  return (
    <div>
      <Button>-</Button>
      <h2 style={{color: 'white'}}>{props.timerLength}</h2>
      <Button>+</Button>
    </div>
  );
};
