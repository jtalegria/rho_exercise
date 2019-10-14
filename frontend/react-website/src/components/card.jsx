import React, { Component } from "react";
import {Link} from "react-router-dom"

// STYLES
import StyledCard from "../styles/Card-Style";
import StyledLink from "../styles/StyledLink";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/sports/" + this.props.id)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data
        })
      );
  }

  render() {
    const events_length = this.state.data.length;
    return (
      <StyledLink to={`/events/${this.props.id}`}>
        <StyledCard imgUrl={this.props.imgUrl}>
          <div className="card">
            <div className="card-image"></div>
            <div className="card-text">
              <h2>{this.props.desc}</h2>
            </div>
            <div className="card-stats">
              <div className="stat">
                <div className="value"></div>
                <div className="type"></div>
              </div>
              <div className="stat">
                <div className="value">{events_length}</div>
                <div className="type">events</div>
              </div>
              <div className="stat">
                <div className="value"></div>
                <div className="type"></div>
              </div>
            </div>
          </div>
        </StyledCard>
        </StyledLink>
      
    );
  }
}

export default Card;
