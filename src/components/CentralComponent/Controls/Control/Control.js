import React from 'react';

import classes from './Control.module.css'

const controlOne = (props) => (
  <div className={classes.Control}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} >Less</button>
    <button className={classes.More} onClick={props.added}>Mode</button>
  </div>
);

export default controlOne;

