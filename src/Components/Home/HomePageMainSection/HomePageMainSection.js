import {
  Row } from 'antd';
import React from 'react';
import './HomePageMainSection.css';
class HomePageMainSection extends React.Component {

  render() {
    return (
      <div>
        <div className="site-home-page-ghost-wrapper">
        <Row align="middle" justify="center" style={{ height: '100vh', width: '100vw' }} >
              <p className="intro-liner">
                ReactJS Boilerplate
                <br/>with Webpack
                <br/><span className="intro-liner-thin">& Apache Deployer</span>
              </p>
          </Row>
        </div>
      </div>);
  }
}

export default HomePageMainSection;