import React from 'react';
//import {connect} from 'react-redux';
import Category from './category';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

export default function Inventory(props) {

    
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Backpack</Tab>
            <Tab>Locker</Tab>
          </TabList>
          <TabPanel>
            <Category location={'backpack'}/>
          </TabPanel>
          <TabPanel>
            <Category location={'locker'}/>
          </TabPanel>
        </Tabs>
      </div>
    );

}

// const mapStateToProps = state => ({
//   items: state.items,
//   loading: state.loading,
//   error: state.error
// });

// export default connect(mapStateToProps)(Inventory);