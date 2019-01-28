import React from 'react';

import reactLogo from '../../assets/images/react-logo.png';
import classes from './Logo.module.css';


const logo = (props) => (
  <div className={classes.Logo}>
    <img src={reactLogo} alt="Reactjs"></img>
  </div>
);

export default logo;