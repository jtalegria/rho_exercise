import React, { Component } from "react";

import StyledPage404 from "../styles/Page404-Style";

class Page404 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
      this.props.history.goBack();
  }

  render() {
    return (
      <StyledPage404>
        <div id="notfound">
          <div class="notfound">
            <div class="notfound-bg">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h1>oops!</h1>
            <h2>Error 404 : Page Not Found</h2>
            <button onClick={this.goBack}>go back</button>
          </div>
        </div>
      </StyledPage404>
    );
  }
}

export default Page404;
