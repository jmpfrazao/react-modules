import React from 'react';

import classes from './Controls.module.css';
import Control from './Control/Control';

const controlsObjs = [
  { label: 'LabelSix', type: 'six' },
  { label: 'LabelFive', type: 'five' },
  { label: 'LabelFour', type: 'four' },
  { label: 'LabelThree', type: 'three' }
]

const controls = (props) => (
  <div className={classes.Controls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controlsObjs.map(ctrl => (
      <Control
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.itemAdded(ctrl.type)}
        removed={() => props.itemRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        />
    ))}
    <button 
    className={classes.OrderButton}
    disabled={!props.checkout} onClick={props.modal}>ORDER</button>
  </div>
);

export default controls;