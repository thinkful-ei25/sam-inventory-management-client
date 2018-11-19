import React from 'react';
import {connect} from 'react-redux';
import Backpack from './backpack';
import Locker from './locker';

export function Inventory(props) {

    
    return (
      <div>
        <Backpack />
        <Locker />
      </div>
    );

}

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(Inventory);