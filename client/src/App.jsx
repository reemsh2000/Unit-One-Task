import React from 'react';

import { Tabs,PageHeader } from 'antd';
import HomePage from './components/HomePage';
import AddItem from './components/AddItem';
import SearchById from './components/SearchById';

const { TabPane } = Tabs;

const App = () => (
  <>
    <PageHeader
        className="site-page-header"
        title="Unit One Task"
        subTitle="Reem Shamia"
        style={{padding:10}}
      />
  <Tabs defaultActiveKey="1" style={{padding:10,fontSize:30}} >
    <TabPane tab="Home" key="1">
      <HomePage/>
    </TabPane>
    <TabPane tab="Add Item " key="2">
     <AddItem/>
    </TabPane>
    <TabPane tab="Search By Id " key="3">
      <SearchById/>
    </TabPane>
  </Tabs>
  </>
);
export default App;