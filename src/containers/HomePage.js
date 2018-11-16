import React from "react";
import t from "prop-types";
import Scroll from "../components/Scroll";
import Background from "../components/Background";
import MySocialMediaLinks from "../components/MySocialMediaLinks";

class HomePage extends React.PureComponent {
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
      // <Scroll>
      <React.Fragment>
        <Background />
        <div
          className="bg-white dib"
          style={{
            display: "flex",
            position: "relative",
            minHeight: "100px",
            width: "100%",
            paddingLeft: "20%"
          }}
        >
          <div style={{ display: "block" }}>
            <h3> BE A CHARISMATIC STYLISH NINJA</h3>
            <p> START EXPLORING NOW</p>
          </div>
          <div style={{ paddingTop: "1em", paddingLeft: "20%" }}>
            <a
              style={{ cursor: "pointer", border: "solid 2px black" }}
              className="f6 link dim br4 ph3 pv2 mb2 dib white center bg-black shadow-5"
              href="../videos"
            >
              VIDEOS LIST
            </a>
          </div>
          <div style={{ paddingTop: "1em", paddingLeft: "1%" }}>
            <a
              style={{ cursor: "pointer" }}
              className="f6 link dim br4 ba bw1 ph3 pv2 mb2 dib black shadow-5"
              href="../videos"
            >
              EXPLORE
            </a>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ flex: 2 }}>
            <MySocialMediaLinks />
          </div>
          <div
            className="tc grow pa3 ma2 db bw2 right"
            style={{
              flex: 1,
              width: "40rem",
              height: "30rem",
              marginLeft: "6rem"
            }}
          >
            <div style={{}}>
              {/* <h2 style={{ color: "white" }}>
                {this.props.location && this.props.location.name
                  ? this.props.location.name
                  : this.state.default.name}
              </h2> */}
            </div>
            <div className="tc pt1 pr1 pl1 ba">
              {this.props.location && this.props.location.embed
                ? this.props.location.embed
                : this.state.default.embed}
            </div>
          </div>
        </div>
        <br />

        {/* // </Scroll> */}
        {/* </Scroll> */}
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
