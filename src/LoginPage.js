import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './App.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="login_wrapper">
        <h1 style={{ textAlign: 'center' }}>Login Here</h1>
        <Input placeholder="Email address" className="input_wrapper" />
        <Input placeholder="Passwrod" className="input_wrapper" />
        <div className="submit_wrapper">
          <Button type="primary">Login</Button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
