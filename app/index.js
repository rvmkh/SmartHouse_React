"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Initpage} from "./initpage";
import {Lamp} from "./lamp";
const container = document.getElementById("root");

class Navigation extends React.Component {
   render() {
    return (
     <Router>
      <div>
        <Switch>
          <Route exact path = "/" component={Initpage} />
          <Route path = "/lamp" component={Lamp} />
        </Switch>
      </div>
     </Router> );
   }
}
ReactDOM.render(
  <Navigation />,
  container
);



//
