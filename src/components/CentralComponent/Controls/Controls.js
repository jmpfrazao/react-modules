import React from 'react';

import classes from './Controls.module.css';
import controlOne from './Control/Control';

const controlsObjs = [
  { label: 'SIX', type: 'six' },
  { label: 'FIVE', type: 'five' },
  { label: 'FOUR', type: 'four' },
  { label: 'THREE', type: 'three' }
]

const controls = (props) => (
  <div className={classes.Controls}>
    {/* {controlsObjs.map(ctrl => {
      <controlOne key={ctrl.key} label={ctrl.label}/>
    })} */}
  </div>
);

export default controls;