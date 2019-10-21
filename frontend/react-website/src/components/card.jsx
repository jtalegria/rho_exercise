import React, { Component } from "react";

// STYLES
import StyledCard from "../styles/Card-Style";
import StyledLink from "../styles/StyledLink";
import Swal from "sweetalert2";

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
    const { data } = this.state;
    const events_length = data.length;

    if (events_length === 0) {
      return (
        <div>
          <StyledCard
            imgUrl={this.props.imgUrl}
            onClick={() =>
              Swal.fire({
                text: "There is no events for ".concat(this.props.desc),
                showCloseButton: true,
                confirmButtonColor: "#d0b4a0",
                focusConfirm: false
              })
            }
          >
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
                  <div className="value">no</div>
                  <div className="type">events</div>
                </div>
                <div className="stat">
                  <div className="value"></div>
                  <div className="type"></div>
                </div>
              </div>
            </div>
          </StyledCard>
        </div>
      );
    }

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
