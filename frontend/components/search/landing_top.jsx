import React from "react";
import SearchCard from "./search_card";
import EventIndexContainer from "../events/event_index_container";
import SearchBarContainer from "./search_bar_container";

class LandingTop extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeOfPhoto = this.handleChangeOfPhoto.bind(this);
  }

  componentDidMount() {
    this.handleChangeOfPhoto();
  }

  componentWillUnmount() {
    clearInterval(this.imageInterval);
  }

  handleChangeOfPhoto() {
    this.imageInterval = setInterval(() => {
      let image = document.getElementsByClassName("LandingImage")[0];
      if (image.classList.contains("one")) {
        image.classList.remove("one");
        image.classList.add("two");
      } else if (image.classList.contains("two")) {
        image.classList.remove("two");
        image.classList.add("three");
      } else if (image.classList.contains("three")) {
        image.classList.remove("three");
        image.classList.add("four");
      } else {
        image.classList.remove("four");
        image.classList.add("one");
      }
    }, 6000);
  }

  render() {
    return (
      <div className="root-page">
        <img className="LandingImage one" />
        <div className="meta-search-card">
          <h1>Find your next Experience</h1>
          <SearchBarContainer props={this.props} />
        </div>
        <EventIndexContainer props={this.props} />
      </div>
    );
  }
}

export default LandingTop;
