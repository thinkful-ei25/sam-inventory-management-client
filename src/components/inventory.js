import React from 'react';
import {connect} from 'react-redux';
import Category from './category';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {fetchItems} from '../actions/items';
import './inventory.css';

export class Inventory extends React.Component{


  componentDidMount(){
    this.props.dispatch(fetchItems());
  }

  calcWeight(location){
    let totalWeight=0;
    let items = this.props.items;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let itemWeight = parseFloat(item.weight,10);
      let itemQuantity = parseFloat(item.quantity,10);
      let itemTotal = itemQuantity*itemWeight;
      if (item.location === location) {
        totalWeight += itemTotal;
      }
    }
    let limit;
    if(location==='locker'){
      limit=400;
    } else if (location==='backpack'){
      limit=150;
    }
    let weightClass;
    if(totalWeight>limit){
      weightClass='overencumbered';
    } else {
      weightClass='normal-weight';
    }

    return (
      <span className={weightClass}>{totalWeight}/{limit}</span>
    );
  }
  


  render(){
    return (
      <div className="inventory-container">
        <Tabs>
          <TabList>
            <Tab>Backpack</Tab>
            <Tab>Locker</Tab>
          </TabList>
          <TabPanel>
            <Category location={'backpack'} />
          </TabPanel>
          <TabPanel>
            <Category location={'locker'} />
          </TabPanel>
        </Tabs>
        <div className="weight-totals">
          <strong>
            <div className="weight-total">Backpack: {this.calcWeight('backpack')} </div>
            <div className="weight-total">Locker: {this.calcWeight('locker')}</div>
          </strong>
        </div>
      </div>
  );   
}
  

}

const mapStateToProps = state => ({
  items: state.itemReducer.items,
  loading: state.itemReducer.loading,
  error: state.itemReducer.error
});

export default connect(mapStateToProps)(Inventory);