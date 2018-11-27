import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';

export default class EditForm extends React.Component {

  render(){
    return(
      <div>
        Hey there!
      </div>
    );
  }

}

// export default reduxForm({
//   form: 'item'
// })(EditForm);