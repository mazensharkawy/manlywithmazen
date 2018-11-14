import React from "react";
import t from "prop-types";

class Card extends React.PureComponent {
  render() {
    return (
      <div
        style={{ maxWidth: "500px" }}
        className="tc bg-silver br3 pa3 ma2 dib bw2 shadow-5"
        onClick={this.handleOnClick}
      >
        {" "}
        {this.props.children ? this.props.children : ""}
      </div>
    );
  }
}

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
