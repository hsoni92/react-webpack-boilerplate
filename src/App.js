import React, { useState, useEffect } from 'react';
// https://www.npmjs.com/package/react-custom-scrollbars
import { Scrollbars } from 'react-custom-scrollbars';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getCurrentPage } from './Utils/routingUtil.js';
import LoadingScreen from './Components/Common/LoadingScreen/LoadingScreen';
import Home from './Components/Home/Home';
import './App.css';

const App = () => {
  const [ spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, []);

  return (<Router><div className={`App app-class-${getCurrentPage()}`}>
    {spinner && <LoadingScreen/>}
    <Scrollbars style={{ height: '100vh' }}>
        <Switch>
          {/* Route all your pages here */}
          <Route exact path="/" component={Home}></Route>
          {/* <Route exact path="/example" component={Example}></Route> */}
          <Route component={() => <h1>Not found</h1>}></Route>
        </Switch>
    </Scrollbars>
  </div></Router>);
}

export default App;