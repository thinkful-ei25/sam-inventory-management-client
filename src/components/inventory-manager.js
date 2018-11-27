import React from 'react';
import { connect } from 'react-redux';
import {fetchItems} from '../actions/items';

import Inventory from './inventory';
import Header from './header';
import AddItem from './add-item';

import './inventory-manager.css';

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

const mapStateToProps = state => {
  return {
  items: state.itemReducer.items,
  error: state.itemReducer.error,
  loading: state.itemReducer.loading,
  showingModal : state.itemReducer.showingModal
}};

export default connect(mapStateToProps)(InventoryManager);