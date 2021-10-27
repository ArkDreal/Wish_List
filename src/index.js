import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import './index.css';

import DesejosEUsuarios from './Pages/DesejosEUsuarios/DesejosEUsuarios';
import NotFound from './Pages/notFound/NotFound'
import Home from './Pages/Home/App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/DesejosEUsuarios" component = {DesejosEUsuarios}/>
        <Route path = "/*" component = {NotFound}/>
      </Switch>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
