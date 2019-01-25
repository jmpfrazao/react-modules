import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import CentralComponent from '../../components/CentralComponent/CentralComponent';
import Controls from '../../components/CentralComponent/Controls/Controls';

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
    totalFactors: 4
  }

  addItemHandler = (type) => {
    const updatedItems = {
      ...this.state.items
    };
    updatedItems[type] = updatedItems[type] + 1
    const newFactor = this.state.totalFactors + ITEMS_FACTORS[type]
    this.setState({ items: updatedItems, totalFactors: newFactor })
  }

  removeItemHandler = (type) => {
    if (this.state.items[type] <= 0) {
      return;
    }
    const updatedItems = {...this.state.items};
    updatedItems[type] = this.state.items[type] - 1
    this.setState({ 
      items: updatedItems, 
      totalFactors: this.state.totalFactors - ITEMS_FACTORS[type]})

    // if(this.state.items[type] <= 0) {
    //   return;
    // }
    // this.setState({
    //   items:this.state.items[type] - 1, 
    //   totalFactors:this.state.totalFactors -  ITEMS_FACTORS[type]})
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
        <CentralComponent items={this.state.items} />
        <Controls
          itemAdded={this.addItemHandler}
          itemRemoved={this.removeItemHandler}
          disabled={disableInfo}
          price={this.state.totalFactors}
        />
      </Aux>
    );
  }
}

export default CentralContainer;