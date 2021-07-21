import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect  } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { getError, getIsLoading } from 'store/selectors/auth'
import { signIn } from 'store/actions/auth'
import { AUTH_PATHS } from 'constants/paths'

const layout = {
  wrapperCol: {
    md: { span: 8, offset: 8 },
    xs: { span: 24 }
  },
};

const validateMessages = {
  required: 'Please input your ${label}!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const SignIn = ({
  onSignIn,
  isLoading,
  error
}) => {
  const onFinish = ({ user: { email, password } }) => {
    onSignIn(email, password)
  };

  return (
    <Form 
      {...layout}
      className='auth-form'
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
      <Form.Item name={['user', 'email']} rules={[{ required: true, type: 'email' }]} messageVariables={{ label: 'Email' }}>
        <Input prefix={<MailOutlined className='form-field-icon' />} placeholder='Email' />
      </Form.Item>
      <Form.Item name={['user', 'password']} rules={[{ required: true }]} messageVariables={{ label: 'Password' }}>
        <Input.Password prefix={<LockOutlined className='form-field-icon' />} placeholder='Password' />
      </Form.Item>
      <Form.Item wrapperCol={layout.wrapperCol}>
        <Button className='auth-form-button' type='primary' htmlType='submit'>
          Sign in
        </Button>
        <div style={{ marginTop: 15}}>
          Or <Link to={AUTH_PATHS.SIGN_UP}>Sign up here</Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default connect(
  createStructuredSelector({
    error: getError,
    isLoading: getIsLoading
  }),
  {
    onSignIn: signIn
  }
)(SignIn)
