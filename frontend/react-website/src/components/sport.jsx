import React, { Component } from "react";
import Card from "../components/card";

import CenteredDiv from "../styles/CenteredDiv";

class Sport extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://127.0.0.1:8000/sports/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          loading: false,
          data: data
        })
      )
      .catch(console.log("erro"));
  }

  render() {
    const { data } = this.state;
    const data_length = Object.keys(data).length;
    const cards = [...Array(data_length)].map((e, i) => (
      <Card key={i} id={data[i].id} desc={data[i].desc} />
    ));
    return (
      <div>
        <CenteredDiv>{cards}</CenteredDiv>
      </div>
    );
  }
}

export default Sport;
