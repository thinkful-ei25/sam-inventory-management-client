import React from 'react';
import {connect} from 'react-redux';

import ItemForm from './item-form';

import './add-item.css';
import {toggleModal} from '../actions/items';

export class AddItem extends React.Component{
  
  state = {
    addingItem: false
  };

  handleClick(){
   //e.preventDefault();
    this.setState({addingItem: !this.state.addingItem})
    this.props.dispatch(toggleModal(true));
   }

  render(){

    if(this.state.addingItem){
      return(
        <div>
          <div className="add-item-container">
            <ItemForm handleClick={e => this.handleClick(e)} />
            <button onClick={(e) => this.handleClick(e)}>Exit</button>
          </div>
        </div>

      );
    } else {
      return (
        <div className="add-item-container">
          <button onClick={(e)=>this.handleClick(e)}>Add Item</button>
        </div>
      );
    }
  }
  
  
}

const mapStateToProps = state => ({
  items: state.itemReducer.items,
  loading: state.itemReducer.loading,
  error: state.itemReducer.error,
  addingItem: state.itemReducer.addingItem,
  showingModal: state.itemReducer.showingModal
});

export default connect(mapStateToProps)(AddItem);