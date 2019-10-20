import React, { Component } from "react";

import StyledPage404 from "../styles/Page404-Style";

class Page404 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    const { type } = this.props;
    console.log(this.props);
    return (
      <StyledPage404>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-bg">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h1>oops!</h1>
            {type === "Error" ? (
              <div>
                <h2>Try again later</h2>
                <button onClick={this.refreshPage}>refresh</button>
              </div>
            ) : (
              <div>
                <h2>Error 404 : Page Not Found</h2>
                <button onClick={this.goBack}>go back</button>
              </div>
            )}
          </div>
        </div>
      </StyledPage404>
    );
  }
}

export default Page404;
