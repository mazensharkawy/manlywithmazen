import React from "react";
import t from "prop-types";
import Scroll from "../components/Scroll";
import MySocialMediaLinks from "../components/MySocialMediaLinks";
class Preview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        embed: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gNER-Bwlzx8"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        ),
        name: "ايه اللي جابك هنا ؟",
        videoId: "gNER-Bwlzx8"
      }
    };
  }
  render() {
    return (
      <Scroll>
        <div className="tc grow bg-silver br3 pa3 ma2 dib bw2 shadow-5">
          <div>
            <h2>{(this.props.location && this.props.location.name) ? this.props.location.name : this.state.default.name}</h2>
          </div>
          {(this.props.location && this.props.location.embed) ? this.props.location.embed : this.state.default.embed}
        </div>
        <MySocialMediaLinks />

      </Scroll>
    );
  }
}

Preview.propTypes = {};
Preview.defaultProps = {};

export default Preview;
