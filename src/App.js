import React, { Component } from "react";
import ArticleListCard from "./ArticleListCard/ArticleListCard";
import Tabs from "./tabs/tabs";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  styles = {
    iconRight: {
      color: "black",
      marginRight: 15
    },
    iconLeft: {
      color: "black",
      marginLeft: 15
    }
  };
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper grey lighten-5">
              <ul className="left">
                <li>
                  <i className="material-icons" style={this.styles.iconLeft}>
                    account_circle
                  </i>
                </li>
              </ul>
              <a href="#" className="black-text appTitle">
                CODEBRINK
              </a>
              <ul className="right">
                <li>
                  <i className="material-icons" style={this.styles.iconRight}>
                    search
                  </i>
                </li>
                <li>
                  <i className="material-icons" style={this.styles.iconRight}>
                    more_vert
                  </i>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <Tabs />
      </div>
    );
  }
}

export default App;
