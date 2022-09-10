import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';




function AddContactForm({ name, setName, email, setEmail, phone, setPhone }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleSubmit = (e) => {
    console.log('handle')
    // e.preventDefault()
    // e.preventDefault()
    if (!name || !email || !phone) {
      return toast.warning("Please fill in all fields!!");
    }
  }


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
      onSubmitCapture={handleSubmit}
    // onSubmit={() => {  }}
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
        <Input onChange={(e) => { setName(e.target.value) }} />
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
        <Input onChange={(e) => { setEmail(e.target.value) }} />
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
        <Input onChange={(e) => { setPhone(e.target.value) }} />
      </Form.Item>

      <input type="submit" />





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