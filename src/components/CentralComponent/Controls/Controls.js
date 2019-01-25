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
    {controlsObjs.map(ctrl => (
      <Control
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.itemAdded(ctrl.type)} />
    ))}
  </div>
);

export default controls;