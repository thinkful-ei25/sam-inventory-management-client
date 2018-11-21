import React from 'react';
import {connect} from 'react-redux';


function emptyData(items){
  for(let i=0; i<items.length; i++){
    if(items[i]){
      return;
    }
  }
  return (<tr><td><i>No items</i></td><td>N/A</td><td>N/A</td></tr>)
}

export function ItemList(props) {

  let category;
  if(!props.category){
    category = 'all';
  }else{
    category=props.category;
  }

  const items = props.items.map((item, index) => {
    if (item.location === props.location && item.category===props.category) {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.weight}</td>
        </tr>
      )
    } else if(props.category==='all' && item.location === props.location){
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.weight}</td>
        </tr>
      )
    }
    return null;
    
  });

  return (
    <div>
      <strong>{props.location}-{category}</strong>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quanity</th>
            <th>Weight</th>
          </tr>
          {items}{emptyData(items)}</tbody>
      </table>
    </div>
  )

}

const mapStateToProps = state => {
  return {
  items: state.itemReducer.items,
  error: state.itemReducer.error,
  loading: state.itemReducer.loading
  }};

export default connect(mapStateToProps)(ItemList);