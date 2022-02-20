import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import AppCard from "./AppCard";
import httpService from "../services/httpService";
import './style.css'
const { TabPane } = Tabs;

function DisplayItems({pageNum}) {
  const [items, setItems] = useState([]);
  const getData = async () => {
    const { data } = await httpService.get(`/items/${pageNum}`);
    return data && setItems(data);
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);


  return (
    <Tabs tabPosition={"left"} >
      {items &&
        items.map((item) => {
          return (
            <TabPane tab={`Item ${item.id} : ${item.name}`} key={item.id}style={{width:500}} >
              <AppCard item={item} />
            </TabPane>
          );
        })}
    
    </Tabs>
  );
}

export default DisplayItems;
