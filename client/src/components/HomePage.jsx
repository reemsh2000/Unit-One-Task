import React, { useState } from "react";
import { Typography, Pagination } from "antd";
import DisplayItems from "./DisplayItems";
import "./style.css";

const { Title } = Typography;
function HomePage(props) {
  const [pageNum, setPageNum] = useState(1);
  const handlePageNumberChange = (e) => {
    setPageNum(e);
  };
  return (
    <div>
      <Title level={4}>List Items </Title>

      <DisplayItems pageNum={pageNum} />

      <Pagination
        defaultCurrent={pageNum}
        defaultPageSize={1}
        total={5}
        onChange={handlePageNumberChange}
        style={{
          display: "flex",
          padding: 50,
          justifyContent: "center",
        }}
      />
    </div>
  );
}

export default HomePage;
