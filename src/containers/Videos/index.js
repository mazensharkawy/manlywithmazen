import React from "react";
import t from "prop-types";
import CardList from "../../components/CardList";
import Scroll from "../../components/Scroll";
import videosList from "./videosList";
import Background from "../../components/Background";

class Videos extends React.PureComponent {
  render() {
    return (
      <div>
        <Background />
        <Scroll>
          <CardList videosList={videosList} />
        </Scroll>
      </div>
    );
  }
}

Videos.propTypes = {};
Videos.defaultProps = {};

export default Videos;
