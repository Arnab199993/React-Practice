import React from 'react'
import {Button,Checkbox,Form,Input} from "antd"
import {useNavigate} from "react-router-dom"
import axios from "axios"
const Signup = () => {
    const navigate=useNavigate() //useNavigate is for dynamic programming
    const onFinish=((values)=>{
        console.log('Success:', values);
        //Api call here
        // navigate("/Listing")
        axios.post("http://rustycoder.live:8181/auth/signup",values).then((response)=>{
            console.log(response.data)
             navigate("/Listing")
        }).catch((error)=>{
            console.log(error)
        })
    })
    const onFinishFailed=((errorinfo)=>{
        console.log("Failed",errorinfo) 
    })
    
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    }}>
        <h1>Signup Page</h1>
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Signup