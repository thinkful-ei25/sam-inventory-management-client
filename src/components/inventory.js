import React from 'react';
import {connect} from 'react-redux';
import Category from './category';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {fetchItems} from '../actions/items';

export class Inventory extends React.Component{


  componentDidMount(){
    this.props.dispatch(fetchItems());
  }

  calcWeight(location){
    let totalWeight=0;
    let items = this.props.items;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let itemWeight = parseInt(item.weight,10);
      let itemQuantity = parseInt(item.quantity,10);
      let itemTotal = itemQuantity*itemWeight;
      if (item.location === location) {
        totalWeight += itemTotal;
      }
    }
    return totalWeight;
  }
  

  render(){
    return (
    <div>
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
      <div><strong><span>Backpack: {this.calcWeight('backpack')}/150 </span>
        <span>Locker: {this.calcWeight('locker')}/400 </span></strong>
        
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