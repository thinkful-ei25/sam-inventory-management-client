import React from 'react';
import {connect} from 'react-redux';
import ItemList from './item-list';

export default function Inventory(props) {

    
    return (
      <div>
        <ItemList location={'backpack'}/>
        <ItemList location={'locker'}/>
      </div>
    );

}

// const mapStateToProps = state => ({
//   items: state.items,
//   loading: state.loading,
//   error: state.error
// });

// export default connect(mapStateToProps)(Inventory);