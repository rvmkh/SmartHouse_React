"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Condey extends React.Component {
  constructor(props){
    super(props);
    this.condeyOn = this.condeyOn.bind(this);
  }
  condeyOn(){
    if ( document.getElementById("condey").innerHTML === "Conditioner is Off!" ) {
      document.getElementById("condey").innerHTML = "Conditioner is On!";
      document.getElementById("condey").style.background = "LIGHTCORAL";
    }
    else {
      document.getElementById("condey").innerHTML = "Conditioner is Off!";
      document.getElementById("condey").style.background = "lightgray";
    }
  }
  render() {
    let tablestyle = {
      borderColor: "black",
      width: "50%"
    };
    let thstyle = {
      background: "blue"
    };
    let condeyStyle = {
      background: "lightgray"
    };
    return (
      <div>
        <br></br>
        <table cellPadding="10" rules="none" border="3" align="center" style={tablestyle}>
          <tbody align="center">
            <tr><th style={thstyle}><b>Conditioner</b></th></tr>
            <tr height="150"><td id="condey" style={condeyStyle}>Conditioner is Off</td></tr>
            <tr>
              <td><button type="button" align="left" onClick={this.condeyOn}>On/Off</button>
              <button type="button" align="right"><Link to="/">Home</Link></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
