import React from "react";
import t from "prop-types";
import Scroll from "../components/Scroll";
import VideoCard from "../components/VideoCard"
import Preview from "./Preview";
class HomePage extends React.PureComponent {
  render() {
    const trailer = {
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
    };
    return (
      <Preview></Preview>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
