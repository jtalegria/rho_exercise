import React, { Component } from "react";

class Sport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportID: 0,
      data: {}
    };
  }

  componentDidMount() {
    const sportID = this.props.match.params.sportID;

    fetch("http://127.0.0.1:8000/sports/" + sportID)
      .then(response => response.json())
      .then(data =>
        this.setState({
          sportID: sportID,
          data: data
        })
      );
  }

  render() {
    const { data } = this.state;
    const data_length = Object.keys(data).length;
    return <p> {this.state.sportID}</p>;
  }
}

export default Sport;
