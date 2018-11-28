import React from 'react';
import {connect} from 'react-redux';
import {fetchItem, fetchItems, dropItem} from '../actions/items';

import './item-list.css';

import EditForm from './edit-form';

export class ItemList extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchItems());
  }

  state = {
    editingItem: false,
    showingItem: false
  };


  emptyData(items){
    for(let i=0; i<items.length; i++){
      if(items[i]){
        return;
      }
    }
    return (<tr><td><i>No items</i></td><td>N/A</td><td>N/A</td></tr>)
  }

  handleClickedItem(e, id){
    e.stopPropagation();
    this.props.dispatch(fetchItem(id));
    this.setState({
      showingItem: true
    });
  }


  showItem(){
    if(this.props.expandedItem){
      let item = this.props.expandedItem;
      return(
        <div className="item-popup">
          <span>name: {item.name} </span>
          <span>category: {item.category} </span>
          <span>quantity: {item.quantity} </span>
          <span>weight: {item.weight} </span>
          <button onClick={e=>this.editItem(e,item.id)}>Edit Item</button>
          <button onClick={e=>this.dropItem(e,item.id)}>Drop Item</button>
          <button onClick={e=>this.closeItem(e)}>Close</button>
        </div>
      );
    }
    return null;
  }

  closeItem(){
    //e.stopPropagation();
    this.setState({
      showingItem: false,
      editingItem: false
    });
  }

  editItem(e,id){
    e.stopPropagation();
    this.setState({
      editingItem: true
    });
  }


  dropItem(e,id){
    e.stopPropagation();
    console.log('deleting item ', id);
    this.props.dispatch(dropItem(id));
    this.setState({
      showingItem: false
    });
  }

  generateItems(){

    let category;
    if (!this.props.category) {
      category = 'all';
    } else {
      category = this.props.category;
    }
    
    const items = this.props.items.map((item, index) => {
      if (item.location === this.props.location && item.category === category) {
        return (
          <tr key={index} onClick=
            {
              e => {
                this.handleClickedItem(e, item.id);
              }
            }>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.weight}</td>
          </tr>
        )
      } else if (category === 'all' && item.location === this.props.location) {
        return (
          <tr key={index} onClick=
            {
              e => {
                this.handleClickedItem(e, item.id);
              }
            }>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.weight}</td>
          </tr>
        )
      }
      return null;
    });
    return items;

  }

  render() {

    let expandedItem;
    if(this.state.showingItem){
      expandedItem=this.showItem();
    }

    let editedItem;
    if(this.state.editingItem&&this.state.showingItem){
      editedItem=(<div>
        <EditForm item={this.props.expandedItem} onClose={()=>this.closeItem()}/>
      </div>);
    }

    let items=this.generateItems();

    return (
      <div>
        <table className="inventory-list">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quanity</th>
              <th>Weight</th>
            </tr>
            {items}{this.emptyData(items)}</tbody>
        </table>
        {expandedItem}
        {editedItem}
      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
  items: state.itemReducer.items,
  error: state.itemReducer.error,
  loading: state.itemReducer.loading,
  expandedItem: state.itemReducer.expandedItem,
  editingItem: state.itemReducer.editingItem
  }};

export default connect(mapStateToProps)(ItemList);