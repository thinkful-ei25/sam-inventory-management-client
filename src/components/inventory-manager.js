import React from 'react';
import { connect } from 'react-redux';
import {fetchItems} from '../actions/items';

import Inventory from './inventory';
import Header from './header';
import AddItem from './add-item';

class InventoryManager extends React.Component{

  componentDidMount(){
    this.props.dispatch(fetchItems());
  }

  render() {
    return (
      <div>
        <Header />
        <main role="main">
          <AddItem />
          <Inventory />
        </main>
      </div>
    );
  }
    

}

const mapStateToProps = state => ({
  items: state.guesses,
  error: state.error,
  loading: state.loading
});

export default connect(mapStateToProps)(InventoryManager);