"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class TVset extends React.Component {
  constructor(props){
    super(props);
    this.tvOn = this.tvOn.bind(this);
  }
  tvOn(){
    if ( document.getElementById("screen").innerHTML === "TVset is Off!" ) {
      document.getElementById("screen").innerHTML = "TVset is On!";
      document.getElementById("screen").style.background = "lightgreen";
    }
    else {
      document.getElementById("screen").innerHTML = "TVset is Off!";
      document.getElementById("screen").style.background = "lightgray";
    }
  }
  render() {
    let tablestyle = {
      borderColor: "black",
      width: "50%"
    };
    let thstyle = {
      background: "green"
    };
    let tvstyle = {
      background: "lightgray"
    };
    return (
      <div>
        <br></br>
        <table cellPadding="10" rules="none" border="3" align="center" style={tablestyle}>
          <tbody align="center">
            <tr><th style={thstyle}><b>TVset</b></th></tr>
            <tr height="150"><td id="screen" style={tvstyle}>TVset is Off</td></tr>
            <tr>
              <td><button type="button" align="left" onClick={this.tvOn}>On/Off</button>
              <button type="button" align="right"><Link to="/">Home</Link></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
