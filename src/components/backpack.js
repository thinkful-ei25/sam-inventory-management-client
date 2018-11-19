import React from 'react';
import {connect} from 'react-redux';


export function Backpack(props) {

  const items = props.items.map((item,index)=>(
    <li key={index}>
      {item.name}
    </li>
  ));


    return (
      <ul>
        {items}
      </ul>
    )

}

const mapStateToProps = state => ({
  items: state.items,
  error: state.error,
  loading: state.loading
});

export default connect(mapStateToProps)(Backpack);