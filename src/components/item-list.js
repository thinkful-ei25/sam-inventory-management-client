import React from 'react';
import {connect} from 'react-redux';


export function ItemList(props) {

  const items = props.items.map((item, index) => {

    if (item.location === props.location) {
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
        <strong>{props.location}</strong>
        <table>
            <tbody>
            <tr>
              <th>Item</th>
              <th>Quanity</th>
              <th>Weight</th>
            </tr>
            {items}</tbody>
        </table>
      </div>
    )

}

const mapStateToProps = state => ({
  items: state.items,
  error: state.error,
  loading: state.loading
});

export default connect(mapStateToProps)(ItemList);