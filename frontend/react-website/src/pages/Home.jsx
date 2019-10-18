import React, { Component } from "react";
import Card from "../components/Card"
import Loader from "../components/Loader";

import FlexWrapCentered from "../styles/FlexWrapCentered";
import "../index.css";

class Home extends Component {
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
    const { data, loading } = this.state;
    const data_length = Object.keys(data).length;
    const cards = [...Array(data_length)].map((e, i) => (
      <Card
        key={i}
        id={data[i].id}
        desc={data[i].desc}
        imgUrl={process.env.PUBLIC_URL + "/imgs/" + data[i].id + ".jpeg"}
      />
    ));

    if (loading) {
      return (
        <FlexWrapCentered>
          <Loader />
        </FlexWrapCentered>
      );
    }

    return <FlexWrapCentered>{cards}</FlexWrapCentered>;
  }
}

export default Home;
