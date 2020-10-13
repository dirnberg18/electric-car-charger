//import React from 'react';
/*
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>

      </Router>
    );
  }
}*/

import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Map from './Components/VisitorView';
import Login from './Components/Login';

export default class App extends React.Component  {
  render ()
  {
    return (
      <Router>
        
          <Route>
          <ul>
          <li>
            <Link to="/visitorview">Map</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
              <Route path="/visitorview">
                <Map />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
          </Route>
        <Footer/> 
      </Router> 
    )
  }
 }


/*
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/locationmap">LocationMap</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <LocationMap />
          </Route>
          <Route path="/locationmap">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
*/


