import React, { Component } from "react";
import Event from "../components/Event";
import previous from "../media/previous.png";
import FlexWrapCentered from "../styles/FlexWrapCentered";

class Sport extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      sportID: 0,
      scrollingLock: false,
      data: {}
    };
  }

  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    const sportID = this.props.match.params.sportID;
    window.addEventListener("scroll", this.handleScroll);
    fetch("http://127.0.0.1:8000/sports/" + sportID)
      .then(response => response.json())
      .then(data =>
        this.setState({
          sportID: sportID,
          data: data
        })
      );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 100) {
      console.log("should lock");
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 100) {
      console.log("not locked");
      this.setState({
        scrollingLock: false
      });
    }
  }

  render() {
    const { data, sportID } = this.state;
    const data_length = Object.keys(data).length;
    return (
      <div>
        <button
          className="round-button"
          style={{ position: this.state.scrollingLock ? "fixed" : "relative" }}
          onClick={this.goBack}
        >
          {"<"}
        </button>
        <FlexWrapCentered>
          {Object.keys(data).map(key => (
            <Event key={key} eventID={data[key].id} sportID={sportID} />
          ))}
        </FlexWrapCentered>
      </div>
    );
  }
}

export default Sport;
