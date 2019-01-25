import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Items.module.css';

class Items extends Component {
  render () {
    let item = null;

    switch (this.props.type) {
      case ('three'):
        item = <div className={classes.Item3}></div>;
        break;
      case ('four'):
        item = <div className={classes.Item4}></div>;
        break;
      case ('five'):
        item = <div className={classes.Item5}></div>;
        break;
      case ('six'):
        item = <div className={classes.Item6}></div>;
        break;
      default:
        item = null;
    }
  
    return item;
  }
}

Items.propTypes = {
  type: PropTypes.string.isRequired
}

export default Items;