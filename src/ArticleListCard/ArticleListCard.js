import React, { Component } from "react";
import "./ArticleListCard.css";
// import "materialize-css"; // It installs the JS asset only
// import "materialize-css/dist/css/materialize.min.css";

class ArticleListCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="grey lighten-5 card-background">
            <div>
              <span className="custom-card-title black-text">
                Arrays Divide and Conquer
              </span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
              <div className="details-container">
                <div className="imgPlaceholder" />
                <div className="details-text-container">
                  <div className="details-container">
                    <p className="author-name">Abhishek Panwar</p>
                    <p className="author-name">200 views</p>
                  </div>
                  <p className="published-time">1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleListCard;
