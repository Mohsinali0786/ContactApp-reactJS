import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React, { useState } from 'react';
import { getTTFB } from 'web-vitals';
import {RegisterAction} from '../../store/actions/index'
import { useDispatch } from 'react-redux';

function AddContactANT() {

    const dispatch = useDispatch();

    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const Submit = (e) => {
        var Month=e.DatePicker._locale._months
        console.log('Month',Month)

        var date=e.DatePicker._d
        date=date.getDate()+"-"+Month[date.getMonth()]+"-"+date.getFullYear()
        console.log('date',date)
        var data={
            id:Math.random()*1000,
            firstName:e.fname,
            lastName:e.lname,
            email:e.email,
            password:e.password,
            date_Of_Birth:date,
            gender:e.gender
        }
        dispatch(RegisterAction(data))
    }

    return (
        <>
            <h2>FORM</h2>
            <Form
                autoComplete='off'
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onFinish={Submit}
                onValuesChange={onFormLayoutChange}
                onFinishFailed={(error) => {
                    console.log({ error });
                  }}
            >
                <Form.Item
                    label="FName"
                    name='fname'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        { whitespace: true },
                        { min: 6 },

                    ]}

                    hasFeedback
                >
                    <Input required />
                </Form.Item>
                <Form.Item
                    label="LName"
                    name='lname'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        { whitespace: true },
                        { min: 6 },

                    ]}

                    hasFeedback
                >

                    <Input required />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        { type: 'email' }

                    ]}
                    hasFeedback
                >
                    <Input required />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        { min: 6 },
                        {
                          validator: (_, value) =>
                            value && value.includes("A")
                              ? Promise.resolve()
                              : Promise.reject("Password does not match criteria."),
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmpassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                console.log('getFieldValue',getFieldValue())
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve()
                                }

                                return Promise.reject('Password not matched');
                            },

                        }),
                        
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item label="DatePicker" name='DatePicker'>
                    <DatePicker 
                    />
                </Form.Item>
                <Form.Item name='gender' label="Gender">
                    <Select>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </Form.Item>


                <Form.Item>
                    <Button htmlType='submit'>Register</Button>
                </Form.Item>
            </Form>
        </>

    );
};

export default AddContactANT;