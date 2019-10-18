import React, { Component } from "react";
import { get } from "lodash";
import Results from "../styles/Results";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: {}
    };
  }

  async componentDidMount() {
    const { sportID, eventID } = this.props;
    this.setState({ loading: true });
    const response = await fetch(
      `http://127.0.0.1:8000/sports/${sportID}/events/${eventID}`
    );
    const json = await response.json();
    this.setState({
      data: json,
      loading: false
    });
  }

  render() {
    const { data } = this.state;
    const teamA = get(data, "details.teamA.name");
    const teamB = get(data, "details.teamB.name");
    const teamA_score = get(data, "details.teamA.score");
    const teamB_score = get(data, "details.teamB.score");
    return (
        <Results>
          <div class="card">
            <div class="card-stats">
              <div class="stat">
                <div class="value">{teamA}</div>
                <div class="type">{teamA_score}</div>
              </div>
              <div class="stat divider">VS.</div>
              <div class="stat">
                <div class="value">{teamB}</div>
                <div class="type">{teamB_score}</div>
              </div>
            </div>
          </div>
        </Results>
    );
  }
}

export default Event;
