import React from 'react';
import {connect} from 'react-redux';

import ItemForm from './item-form';

export class AddItem extends React.Component{
  
  state = {
    addingItem: false
  };

  handleClick(){
   //e.preventDefault();
    this.setState({addingItem: !this.state.addingItem})
   }

  render(){
    if(this.state.addingItem){
      return(
        <div>
          <ItemForm handleClick={e=>this.handleClick(e)}/>
          <button onClick={(e)=>this.handleClick(e)}>Exit</button>
        </div>
      );
    } else{
      return (
        <div>
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
  addingItem: state.itemReducer.addingItem
});

export default connect(mapStateToProps)(AddItem);