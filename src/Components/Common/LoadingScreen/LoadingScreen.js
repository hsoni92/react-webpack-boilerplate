import {
  Spin } from 'antd';
import React from 'react';
import './LoadingScreen.css';

class LoadingScreen extends React.Component {

  render() {
    return (
      <div className="loading-screen-ghost-wrapper">
        <Spin size="large" />
      </div>);
  }
}

export default LoadingScreen;