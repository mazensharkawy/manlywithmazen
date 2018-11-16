import React from "react";
import t from "prop-types";
import Scroll from "../components/Scroll";
import Background from "../components/Background";
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
      // <Scroll>
      <div>
        <Background />
        <MySocialMediaLinks className="dib" />
        <div>
          <div
            className="tc grow pa3 db bw2 "
            style={{ width: "40rem", height: "30rem", marginLeft: "6rem" }}
          >
            <div style={{}}>
              <h2 style={{ color: "white" }}>
                {this.props.location && this.props.location.name
                  ? this.props.location.name
                  : this.state.default.name}
              </h2>
            </div>
            {this.props.location && this.props.location.embed
              ? this.props.location.embed
              : this.state.default.embed}
          </div>
          <br />
          <a
            className="f4 grow link dim br2 ba ph3 pv2 mb2 dib white"
            href="../videos"
          >
            Watch More Videos
          </a>
        </div>
        {/* // </Scroll> */}
      </div>
    );
  }
}

Preview.propTypes = {};
Preview.defaultProps = {};

export default Preview;
