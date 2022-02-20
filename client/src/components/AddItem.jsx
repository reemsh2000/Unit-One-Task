import React, { useState } from "react";
import { Alert, Input, Form, message, Button,Typography } from "antd";

import httpService from "../services/httpService";
import  './style.css'
const { Title } = Typography;
function AddItem() {
  const [form] = Form.useForm();
  const [sucess, setSucessMsg] = useState(false);
  const addNewItem = async (name, description) => {
   await httpService.post(
      `/item`,
      {
        name,
        description,
      },
      { headers: { "Content-Type": "application/json" } }
    );

  };

  const handleAddNewItem = async () => {
    try {
      const { name, description } = await form.validateFields();
      await addNewItem(name, description);
      setSucessMsg(true);
      form.resetFields();
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <div className="container">
      <Title level={4}>Add Item</Title>
      {sucess && (
        <Alert
          message="Success "
          description="Item Added Successfully"
          type="success"
          showIcon
          style={{width:350 ,margin:15}}
        />
      )}
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        style={{
          width: 500,
        }}
        onFinish={handleAddNewItem}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "You should enter item name",
            },
          ]}
        >
          <Input placeholder="Item Name " />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "You should Enter item description",
            },
          ]}
        >
          <Input placeholder="Item description " />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddItem;
