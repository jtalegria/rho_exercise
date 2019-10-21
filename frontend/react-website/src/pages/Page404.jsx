import React, { Component } from "react";

import StyledPage404 from "../styles/Page404-Style";
import translations from "../media/translations.json"

class Page404 extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      countryCode: ""
    }
  }

  goBack() {
    this.props.history.goBack();
  }

  refreshPage() {
    window.location.reload(false);
  }

  componentDidMount(){
    fetch("http://ip-api.com/json")
      .then(response => response.json())
      .then(data => this.setState({countryCode: data.countryCode}));
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
                <h2>{this.state.countryCode === "PT" ? translations.tryLater.PT : translations.tryLater.EN}</h2>
                <button onClick={this.refreshPage}>
                  {this.state.countryCode === "PT" ? translations.refresh.PT : translations.refresh.EN}
                </button>
              </div>
            ) : (
              <div>
                <h2>Error 404 : {this.state.countryCode === "PT" ? translations.pageNotFound.PT : translations.pageNotFound.EN}</h2>
                <button onClick={this.goBack}>
                  {this.state.countryCode === "PT" ? translations.goBack.PT : translations.goBack.EN}
                </button>
              </div>
            )}
          </div>
        </div>
      </StyledPage404>
    );
  }
}

export default Page404;
