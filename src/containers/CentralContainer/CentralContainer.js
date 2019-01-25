import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import CentralComponent from '../../components/CentralComponent/CentralComponent';
import Controls from '../../components/CentralComponent/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/CentralComponent/OrderSummary/OrderSummary';

const ITEMS_FACTORS = {
  six: 0.5,
  five: 0.7,
  four: 0.4,
  three: 1.3
}

class CentralContainer extends Component {

  state = {
    items: {
      six: 0,
      five: 0,
      four: 0,
      three: 0
    },
    totalFactors: 4,
    checkout: false,
    modal: false
  }


  updateCheckoutState(items) {
    const sum = Object.keys(items)
      .map(itemKey => {
        return items[itemKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ checkout: sum > 0 });
  }
  addItemHandler = (type) => {
    const updatedItems = {
      ...this.state.items
    };
    updatedItems[type] = updatedItems[type] + 1
    const newFactor = this.state.totalFactors + ITEMS_FACTORS[type]
    this.setState({ items: updatedItems, totalFactors: newFactor })
    this.updateCheckoutState(updatedItems);
  }

  removeItemHandler = (type) => {
    if (this.state.items[type] <= 0) {
      return;
    }
    const updatedItems = { ...this.state.items };
    updatedItems[type] = this.state.items[type] - 1
    this.setState({
      items: updatedItems,
      totalFactors: this.state.totalFactors - ITEMS_FACTORS[type]
    })
    this.updateCheckoutState(updatedItems);
  }

  modalOpenHandler = () => {
    console.log(this)
    this.setState({ modal: true });
  }

  modalCancelHandler = () => {
    this.setState({modal: false});
  }

  modalContinuedHandler = () => {
    alert('You continue!');
  }

  render() {
    const disableInfo = {
      ...this.state.items
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    console.log(disableInfo)
    return (
      <Aux>
        <Modal show={this.state.modal} modalClosed={this.modalCancelHandler}>
          <OrderSummary 
            items={this.state.items}
            factor={this.state.totalFactors}
            modalCancelled={this.modalCancelHandler}
            modalContinued={this.modalContinuedHandler}
             />
        </Modal>
        <CentralComponent items={this.state.items} />
        <Controls
          itemAdded={this.addItemHandler}
          itemRemoved={this.removeItemHandler}
          disabled={disableInfo}
          factor={this.state.totalFactors}
          checkout={this.state.checkout}
          modal={this.modalOpenHandler}
        />
      </Aux>
    );
  }
}

export default CentralContainer;