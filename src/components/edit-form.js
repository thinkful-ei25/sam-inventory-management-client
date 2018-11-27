import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';
import {editItem} from '../actions/items';

export class EditForm extends React.Component{
  

  handleSubmit(values){
    const id = this.props.expandedItem.id;
    const item = {
      ...values,
      id
    };
    this.props.dispatch(editItem(item));
  }

  
  render(){
    
    let successMessage;
    if(this.props.submitSucceeded){
      successMessage=(
        <div>
          Item edited successfully!
        </div>
      );
    }

    let errorMessage;
    if(this.props.error){
      errorMessage=(
        <div>{this.props.error}</div>
      );
    }

    const item = this.props.item;

    return (
      <form onSubmit={this.props.handleSubmit((values) =>{
        this.handleSubmit(values);
        this.props.onClose()
      }
        

      )}>
        {successMessage}
        {errorMessage}
        <label htmlFor="name">Item Name</label>
        <Field component={Input} element="input" type="text" name="name" id="name"></Field>
        <label htmlFor="weight">Item Weight</label>
        <Field component={Input} type="number" name="weight" id="weight"></Field>
        <label htmlFor="category">Item Category </label>
        <Field component="select" id="category" name="category">
          <option value="weapons">Weapon</option>
          <option value="apparel">Apparel</option>
          <option value="aid">Aid</option>
          <option value="junk">Junk</option>
          <option value="misc">Misc.</option>
        </Field><br />
        <label htmlFor="quantity">Item Quantity</label>
        <Field component={Input} type="number" name="quantity" id="quanity"></Field>
        <label htmlFor="location">Where do you want to store your item? </label>
        <Field component="select" id="location" name="location">
          <option value="locker">Locker</option>
          <option value="backpack">Backpack</option>
        </Field><br />
        <button
          type="submit"
          disabled={
            this.props.submitting
          }>
          Edit Item
        </button>
      </form>
    );
    
    
  }
  

}



const mapStateToProps = (state,myProps) => {
  console.log(myProps);
  return {
    editingItem: state.itemReducer.editingItem,
    expandedItem: state.itemReducer.expandedItem,
    showingModal: state.itemReducer.showingModal,
    initialValues: myProps.item
  };
};

EditForm = reduxForm({
  form: 'item'
})(EditForm);

export default connect(mapStateToProps)(EditForm);

