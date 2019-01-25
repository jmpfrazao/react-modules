import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

  const itemsSummary = Object.keys(props.items)
    .map(itemKey => {
      return (
        <li key={itemKey}>
          <span style={{ textTransform: 'capitalize' }}>{itemKey}</span>: {props.items[itemKey]}
        </li>
      )
    })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Selected Items</p>
      <ul>
        {itemsSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  )

}

export default orderSummary;