import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import CentralComponent from '../../components/CentralComponent/CentralComponent';
import Controls from '../../components/CentralComponent/Controls/Controls';

class CentralContainer extends Component {

  state = {
    items: {
      six: 1,
      five: 1,
      four: 2,
      three: 3
    }
  }

  render() {
    return (
      <Aux>
        <CentralComponent items={this.state.items} />
        <Controls/>
      </Aux>
    );
  }
}

export default CentralContainer;