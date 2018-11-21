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
    let totalWeight;
    let items = this.props.items;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (items[i].location === location) {
        totalWeight += item.weight * item.quantity;
      }
    }
    return totalWeight;
  }
  

  render(){
    console.log(this.props);
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
      <div>
        <span>Backpack:{this.calcWeight('backpack')}</span>
        <span>Locker:{this.calcWeight('locker')}</span>
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