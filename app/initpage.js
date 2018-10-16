"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Initpage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loc: "",
    };
    this.setLocation = this.setLocation.bind(this);
    this.setLamp = this.setLamp.bind(this);
  }
  setLocation(event) {
    this.setState({
        loc: event.target.value
    });
  }
  setLamp() {
    console.log("New Lamp created in a " + this.state.loc);
  }
  render() {
    let tablestyle = {
      borderColor: "black",
      width: "90%"
    };
    let thstyle = {
      color: "white",
      background: "red"
    };
    return (
      <div>
        <br></br>
        <table cellPadding="10" rules="none" border="3" align="center" style={tablestyle}>
          <tbody align="center">
            <tr><th style={thstyle} colSpan="2"><b>Devices</b></th></tr>
            <tr>
              <td>Lamp Location <input type="text" onChange={this.setLocation} /></td>
              <td><button type="button" align="center" onClick={this.setLamp} value={this.state.loc}><Link to="/lamp">New Lamp</Link></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
