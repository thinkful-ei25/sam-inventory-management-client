import React from 'react';
import Backpack from './backpack';
import Locker from './locker';

export default class Inventory extends React.Component {


  render(){
    
    return (
      <div>
        <Backpack />
        <Locker />
      </div>
    );
  }

}