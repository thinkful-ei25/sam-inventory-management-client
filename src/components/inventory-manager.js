import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import {fetchItems} from '../actions/items';

import Inventory from './inventory';
import AddItem from './add-item';

import './inventory-manager.css';

class InventoryManager extends React.Component{


  componentDidMount(){
    this.props.dispatch(fetchItems());
  }

  render() {

    return (
      <div>
        <main role="main" className="screen">
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

export default requiresLogin()(connect(mapStateToProps)(InventoryManager)) ;