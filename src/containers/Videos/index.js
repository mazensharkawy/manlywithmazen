import React from "react";
import t from "prop-types";
import CardList from "../../components/CardList";
import Scroll from "../../components/Scroll";
import videosList from "./videosList";

class Videos extends React.PureComponent {
  render() {
    return (
      <div>
        {/* {alert(videosList.length)} */}
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
