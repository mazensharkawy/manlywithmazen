import React from "react";
import t from "prop-types";
import { Redirect } from "react-router";
import Background from "../components/Background";
class Preview extends React.PureComponent {
  render() {
    if (!this.props.location.embed)
      return (
        <Redirect
          to={{
            pathname: "home-page",
            embed: this.props.embed,
            name: this.props.name
          }}
        />
      );
    return (
      // <Scroll>
      <React.Fragment>
        <Background />
        <div className="tc grow bg-white br3 pa1 ma3 dib bw2 shadow-5">
          <div>
            <h2>{this.props.location.name}</h2>
          </div>
          {this.props.location.embed}
        </div>
      </React.Fragment>
      //   </Scroll>
    );
  }
}
Preview.propTypes = {};
Preview.defaultProps = {};
export default Preview;
