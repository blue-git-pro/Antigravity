import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { AUTH_PATHS } from 'constants/paths'

const layout = {
  wrapperCol: {
    md: { span: 8, offset: 8 },
    xs: { span: 24 }
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const SignUp = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form 
      {...layout}
      className='auth-form'
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
      <Form.Item name={['user', 'name']} rules={[{ required: true }]} messageVariables={{ label: 'Name' }}>
        <Input prefix={<UserOutlined className='form-field-icon' />} placeholder="Name" />
      </Form.Item>
      <Form.Item name={['user','email']} rules={[{ required: true, type: 'email' }]} messageVariables={{ label: 'Email' }}>
        <Input prefix={<MailOutlined className='form-field-icon' />} placeholder="Email" />
      </Form.Item>
      <Form.Item name={['user','password']} rules={[{ required: true }]} messageVariables={{ label: 'Password' }}>
        <Input.Password prefix={<LockOutlined className='form-field-icon' />} placeholder="Password" />
      </Form.Item>
      <Form.Item name={['user','confirm_password']} rules={[{ required: true }]} messageVariables={{ label: 'Confirm Password' }}>
        <Input.Password prefix={<LockOutlined className='form-field-icon' />} placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item wrapperCol={layout.wrapperCol}>
        <Button className='auth-form-button' type="primary" htmlType="submit">
          Sign up
        </Button>
        <div style={{ marginTop: 15 }}>
          Already have an account? <Link to={AUTH_PATHS.SIGN_IN}>Sign in here</Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignUp