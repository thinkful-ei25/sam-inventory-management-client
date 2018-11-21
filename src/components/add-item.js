import React from 'react';
import {connect} from 'react-redux';

import AddItemForm from './add-item-form';

export function AddItem(props){

  if(props.addingItem){
    return(
      <div>
        <AddItemForm />
      </div>
    );
  } else{
    return (
      <div>
        <button>Press me!</button>
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  items: state.itemReducer.items,
  loading: state.itemReducer.loading,
  error: state.itemReducer.error,
  addingItem: state.itemReducer.addingItem
});

export default connect(mapStateToProps)(AddItem);