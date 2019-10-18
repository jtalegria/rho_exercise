import React, { Component } from "react";
import Event from "../components/Event";
import previous from "../media/previous.png";
import FlexWrapCentered from "../styles/FlexWrapCentered";

class Sport extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      sportID: 0,
      data: {}
    };
  }

  goBack() {
    this.props.history.goBack();
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
    const { data, sportID } = this.state;
    const data_length = Object.keys(data).length;
    return (
      <React.Fragment>
        <img
          src={previous}
          alt="previous"
          onClick={this.goBack}
          style={{ width: "45px", height: "auto" }}
        />
        <FlexWrapCentered>
          {Object.keys(data).map(key => (
            <Event key={key} eventID={data[key].id} sportID={sportID} />
          ))}
        </FlexWrapCentered>
      </React.Fragment>
    );
  }
}

export default Sport;
