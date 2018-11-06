import React from "react";
import t from "prop-types";
import Scroll from "../components/Scroll";
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
      name: "ايه اللي جابك هنا ؟"
    };
    return (
      <Scroll>
        <div className="tc grow bg-silver br3 pa3 ma2 dib bw2 shadow-5">
          {/* <img style={{ maxHeight: "250px" }} alt="robots" src={img} /> */}

          <div>
            <h2>{trailer.name}</h2>
          </div>
          {trailer.embed}
        </div>
      </Scroll>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;
