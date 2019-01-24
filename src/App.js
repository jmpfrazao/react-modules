import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import CentralContainer from './containers/CentralContainer/CentralContainer';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CentralContainer/>
        </Layout>
      </div>
    );
  }
}

export default App;
