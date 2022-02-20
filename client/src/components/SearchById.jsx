import React, { useState } from "react";
import { Input, Form, message, Button,Typography } from "antd";
import httpService from "../services/httpService";
import AppCard from "./AppCard";
import  './style.css'
const { Title } = Typography;

function SearchById() {
  const [item,setItem] = useState();
  const [form] = Form.useForm()
  console.log(item)
  const getItem = async (id) => {
    const { data } = await httpService.get(`/items/${id}`);
    return data && setItem(data);
  };;

  const getItemById = async () => {
    try {
      const { id } = await form.validateFields();
      await getItem(id);
      form.resetFields();
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <div className="container">
      <Title level={4}>Search about Item By Id </Title>
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        style={{
          width: 500,
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-evenly"
        }}
        onFinish={getItemById}
      >
        <Form.Item
          name="id"
          rules={[
            {
              required: true,
              message: "You should enter id",
            },
          ]}
        >
          <Input placeholder="Item Name " />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      {item && <AppCard item={item[0]}/>}
    </div>
  );
}

export default SearchById;
