import React from "react";
import t from "prop-types";
import Card from "../components/Card";
import Scroll from "../components/Scroll";
import NumberInputCard from "../components/NumberInputCard";
import {
  changeSeconds,
  incrementSecondsPerPage,
  incrementCurrentPage,
  toggleTimerState,
  decrementTimerSeconds,
  resetSecondsTimer
} from "../sdk/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    secondsPerPage: state.secondsPerPage,
    currentTimerSeconds: state.currentTimerSeconds,
    currentPage: state.currentPage,
    isRunning: state.isRunning
  };
};

const mapDispatchToProps = dispatch => ({
  onSecondsChange: event => dispatch(changeSeconds(event.target.value)),
  onIncrementSecondsPerPage: i => dispatch(incrementSecondsPerPage(i)),
  incrementCurrentPage: i => dispatch(incrementCurrentPage(i)),
  toggleTimerState: () => dispatch(toggleTimerState()),
  decrementTimerSeconds: () => dispatch(decrementTimerSeconds()),
  resetSecondsTimer: () => dispatch(resetSecondsTimer())
});

class ReadingBooster extends React.PureComponent {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
  }
  start = () => {
    this.props.toggleTimerState();

    this.mainTimer = setInterval(() => {
      console.log(this.props.currentPage);
      this.props.decrementTimerSeconds();
      if (this.props.currentTimerSeconds <= 0) {
        this.props.resetSecondsTimer();
        this.props.incrementCurrentPage(1);
      }
    }, 1000);
  };
  pause = () => {
    this.props.toggleTimerState();
    clearTimeout(this.mainTimer);
  };

  render() {
    const {
      secondsPerPage,
      onSecondsChange,
      currentPage,
      onIncrementSecondsPerPage,
      incrementCurrentPage,
      currentTimerSeconds
    } = this.props;
    return (
      <div style={{ minHeight: "800px" }}>
        <div className="fl w-100">
          <NumberInputCard
            title="Seconds Per Page"
            value={secondsPerPage}
            onChange={onSecondsChange}
            increment={i => onIncrementSecondsPerPage(i)}
          />
          <Card>
            <h1 className="f1" style={{ minWidth: "100px" }}>
              {currentTimerSeconds ? currentTimerSeconds : secondsPerPage}
            </h1>
          </Card>
          <NumberInputCard
            title="Current Page"
            value={currentPage}
            onChange={onSecondsChange}
            increment={i => incrementCurrentPage(i)}
          />
        </div>

        <div className="fl w-100 ma4">
          {!this.props.isRunning ? (
            <div
              className="tc grow bg-blue br3 pa3 ma2 dib bw2 white shadow-5"
              onClick={this.start}
            >
              {" "}
              Start
            </div>
          ) : (
            <div
              style={{ maxWidth: "500px" }}
              className="tc grow bg-red br3 pa3 ma2 dib bw2 white shadow-5"
              onClick={this.pause}
            >
              {" "}
              Pause
            </div>
          )}
        </div>
      </div>
    );
  }
}

ReadingBooster.propTypes = {};
ReadingBooster.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadingBooster);
