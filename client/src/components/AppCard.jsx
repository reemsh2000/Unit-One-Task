import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.min.css';
import  './style.css'

function AppCard({item}) {
  const {name,description} =item;
  return (
    <div className="site-card-border-less-wrapper ">
    <Card title={name} bordered={false} style={{ width: 300 }}>
      <p>{description}</p>
    </Card>
  </div>
  )
}

export default AppCard;