import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
//import {required, isNumber} from '../validators';
import Input from './input';
import {addItem} from '../actions/items';

export class AddItemForm extends React.Component{
  
  
  handleSubmit(values){
    this.props.dispatch(addItem(values));
  }
  
  render(){
    
    let successMessage;
    if(this.props.submitSucceeded){
      successMessage=(
        <div>
          Item added successfully!
        </div>
      );
    }

    let errorMessage;
    if(this.props.error){
      errorMessage=(
        <div>{this.props.error}</div>
      );
    }



    return(
        <form onSubmit={this.props.handleSubmit(values=>
          this.handleSubmit(values)
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
          </Field><br/>
          <label htmlFor="quantity">Item Quantity</label>
          <Field component={Input} type="number" name="quantity" id="quanity"></Field>
          <label htmlFor="location">Where do you want to store your item? </label>
          <Field component="select" id="location" name="location">
            <option value="locker">Locker</option>
            <option value="backpack">Backpack</option>
          </Field><br/>
        <button
          type="submit"
          disabled={
            this.props.pristine ||
            this.props.submitting
          }>
          Add Item
          </button>
        </form>
      );
  }
  

}

export default reduxForm({
  form: 'item'
})(AddItemForm);