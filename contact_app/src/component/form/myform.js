import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';


function AddContactForm({name,setName,email,setEmail, phone,setPhone})  {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={(e)=>{setName(e.target.value)}} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Item>
      <Form.Item
        label="Number"
        name="number"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  onChange={(e)=>{setPhone(e.target.value)}}/>
      </Form.Item>

 

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

      </Form.Item>
    </Form>
  );
};

export default AddContactForm;