import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  render() {
    const itemsSummary = Object.keys(this.props.items)
      .map(itemKey => {
        return (
          <li key={itemKey}>
            <span style={{ textTransform: 'capitalize' }}>{itemKey}</span>: {this.props.items[itemKey]}
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
        <p><strong>Total Price: {this.props.factor.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.modalCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.modalContinued}>CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary;