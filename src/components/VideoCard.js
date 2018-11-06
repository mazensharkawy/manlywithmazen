import React from "react";
import { Redirect } from "react-router";

import t from "prop-types";

class VideoCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const img = this.props.img;
    const name = this.props.name;
    const embed = this.props.embed;
    if (this.state.redirect === true) {
      return (
        <Redirect
          to={{
            pathname: "video-preview",
            embed: this.props.embed,
            name: this.props.name
          }}
        />
      );
    }
    return (
      <div
        style={{ maxWidth: "500px" }}
        className="tc grow bg-silver br3 pa3 ma2 dib bw2 shadow-5"
        onClick={this.handleOnClick}
      >
        <img
          onClick="handleOnClick"
          style={{ maxHeight: "250px" }}
          alt="robots"
          src={img}
        />
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}

VideoCard.propTypes = {};
VideoCard.defaultProps = {};

export default VideoCard;