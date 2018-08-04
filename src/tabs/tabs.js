import React, { Component } from "react";
import "./tabs.css";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";

class Tabs extends Component {
  styles = {
    color: "black"
  };
  render() {
    return (
      <div className="row tabs-container">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3">
              <a className="active" href="#test2" style={this.styles}>
                Recents
              </a>
            </li>
            <li className="tab col s3">
              <a style={this.styles} href="#test1">
                Learn
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tabs;
