import React from "react";
import t from "prop-types";
import background from "../resources/blueGradient.jpg";

class Background extends React.PureComponent {
  render() {
    return (
      // <div
      //   style={{
      //     opacity: ".4",
      //     background:
      //       "-moz-linear-gradient(top, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
      //     background:
      //       "-webkit-linear-gradient(top, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
      //     background:
      //       "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
      //     filter:
      //       "progid: DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#cc000000', GradientType=0)"
      //   }}
      // >
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          paddingBottom: "200px",
          // overflowX: "hidden",
          backgroundImage: "url(" + background + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      // </div>
    );
  }
}

Background.propTypes = {};
Background.defaultProps = {};

export default Background;
