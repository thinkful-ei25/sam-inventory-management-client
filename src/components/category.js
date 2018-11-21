import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ItemList from './item-list';

export default function Category(props){
  return(
    <div>
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Weapons</Tab>
          <Tab>Apparel</Tab>
          <Tab>Aid</Tab>
          <Tab>Misc</Tab>
          <Tab>Junk</Tab>
        </TabList>

        <TabPanel>
          <ItemList category={'all'} location={props.location}/>
        </TabPanel>
        <TabPanel>
          <ItemList category={'weapons'} location={props.location}/>
        </TabPanel>
        <TabPanel>
          <ItemList category={'apparel'} location={props.location}/>
        </TabPanel>
        <TabPanel>
          <ItemList category={'aid'} location={props.location}/>
        </TabPanel>
        <TabPanel>
          <ItemList category={'misc'} location={props.location}/>
        </TabPanel>
        <TabPanel>
          <ItemList category={'junk'} location={props.location}/>
        </TabPanel>
      </Tabs>
    </div>
    
  );
}