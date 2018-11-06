import React from "react";
import t from "prop-types";
import Scroll from "../components/Scroll";
class Preview extends React.PureComponent {
  render() {
    return (
      <Scroll>
        <div className="tc grow bg-silver br3 pa3 ma2 dib bw2 shadow-5">
          <div>
            <h2>{this.props.location.name}</h2>
          </div>
          {this.props.location.embed}
        </div>
      </Scroll>
    );
  }
}

Preview.propTypes = {};
Preview.defaultProps = {};

export default Preview;
