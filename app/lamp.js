"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Lamp extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let tablestyle = {
      borderColor: "black",
      width: "90%"
    };
    let thstyle = {
      color: "blue",
      background: "yellow"
    };
    return (
      <div>
        <br></br>
        <table cellPadding="10" rules="none" border="3" align="center" style={tablestyle}>
          <tbody align="center">
            <tr><th style={thstyle}><b>New Lamp created</b></th></tr>
            <tr>
              <td><button type="button" align="center"><Link to="/">Home</Link></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
