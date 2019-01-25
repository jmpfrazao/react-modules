import React from 'react';

import classes from './CentralComponent.module.css';
import Item from './Items/Items';

const centralComponent = (props) => {
  let transformedItems = Object.keys(props.items).map(
    itemKey => {
      return [...Array(props.items[itemKey])].map((_, i) => {
          return <Item key={itemKey + i} type={itemKey} />
        });
    }).reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  if (transformedItems.length === 0) {
    transformedItems = <p>Please start adding items!</p>
  }
  return (
    <div className={classes.CentralComponent}>
      <Item type="two" />
      {transformedItems}
      <Item type="one" />
    </div>
  );
}

export default centralComponent; 