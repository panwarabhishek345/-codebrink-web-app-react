import React, { Component } from "react";
import Footer from "./footer/footer";
import ArticleListCard from "./ArticleListCard/ArticleListCard";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper grey lighten-5">
              <a href="#" className="black-text appTitle">
                CODEBRINK
              </a>
            </div>
          </nav>
        </div>
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />
        <ArticleListCard />

        <Footer />
      </div>
    );
  }
}

export default App;
