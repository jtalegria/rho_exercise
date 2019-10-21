import React, { Component } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

import FlexWrapCentered from "../styles/FlexWrapCentered";
import "../index.css";
import Page404 from "./Page404";

import translations from "../media/translations.json"
import { get } from "lodash";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      error: false,
      countryCode: "",
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
      .catch(response => {
        if (response.status !== 200) {
          this.setState({
            error: true,
            loading: false
          });
        }
      });

      fetch("http://ip-api.com/json")
      .then(response => response.json())
      .then(data => this.setState({countryCode: data.countryCode}));
  }

  render() {
    const { data, loading, error, countryCode } = this.state;
    const data_length = Object.keys(data).length;
    console.log(countryCode)
    const cards = [...Array(data_length)].map((e, i) => (
      <Card
        key={i}
        id={data[i].id}
        //desc={data[i].desc}
        desc = {countryCode === "PT" ? get(translations, `${data[i].id}`.concat(".PT")) : get(translations, `${data[i].id}`.concat(".EN"))}
        countryCode = {countryCode}
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

    if (error) {
      return <Page404 type="Error" />;
    }

    return <FlexWrapCentered>{cards}</FlexWrapCentered>;
  }
}

export default Home;
