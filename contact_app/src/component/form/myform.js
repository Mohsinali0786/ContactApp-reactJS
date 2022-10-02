import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input } from 'antd';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router"

// import 'react-toastify/dist/ReactToastify.css';




function AddContactForm({ name, setName, email, setEmail, phone, setPhone,Edit }) {
  const contacts = useSelector((state) => state.ContactDetails)
  const Navigate = useNavigate();
  const dispatch=useDispatch()
  console.log('contacts', contacts)
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleSubmit = (e) => {
    console.log('handle',e)

//     if(Edit===true){

//       const checkEmailIsExist = contacts.find(contact =>contact.id !== id && contact.email === email )
//        const checkNumberIsExist = contacts.find(contact => contact.number === parseInt(phone) )
//     }

//    else if(Edit===false){
//      const checkEmailIsExist = contacts.find(contact => contact.email === email )
//       console.log('checkEmailIsExist',checkEmailIsExist)
//       const checkNumberIsExist = contacts.find(contact => contact.number === parseInt(phone) && phone)
//    }
//     if (!name || !email || !phone) {
//       return toast.warning("Please fill in all fields!!");
//     }
//     if (checkEmailIsExist) {
//       return toast.error('Email Exist')
//   }
//   if (checkNumberIsExist) {
//     return toast.error('Num Exist')
// }
const data = {
  id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
  email,
  name,
  phone,
};
// Edit?
// dispatch({
//   type:'EDIT_CONTACT',
//   payload:data
// }):
dispatch({
  type:'ADD_CONTACT',
  payload:data
})
toast.success("Contact added successfully!!");
Navigate("/");
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