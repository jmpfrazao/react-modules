import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Items.module.css';

class Items extends Component {
  render () {
    let item = null;

    switch (this.props.type) {
      case ('one'):
        item = <div className={classes.Bottom}></div>;
        break;
      case ('two'):
        item = (
          <div className={classes.Top}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ('three'):
        item = <div className={classes.Item1}></div>;
        break;
      case ('four'):
        item = <div className={classes.Item2}></div>;
        break;
      case ('five'):
        item = <div className={classes.Item3}></div>;
        break;
      case ('six'):
        item = <div className={classes.Item4}></div>;
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