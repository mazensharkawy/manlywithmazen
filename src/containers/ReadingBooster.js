import React from "react";
import t from "prop-types";
import Card from "../components/Card";
import Scroll from "../components/Scroll"
import NumberInputCard from "../components/NumberInputCard";
import { changeSeconds, incrementSecondsPerPage, incrementCurrentPage } from "../sdk/actions"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        secondsPerPage: state.secondsPerPage,
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSecondsChange: (event) => dispatch(changeSeconds(event.target.value)),
    onIncrementSecondsPerPage: (i) => {
        console.log("chamging secodns in reading bootster")
        dispatch(incrementSecondsPerPage(i))
    },
    incrementCurrentPage: (i) => dispatch(incrementCurrentPage(i))
})
class ReadingBooster extends React.PureComponent {

    constructor(props) {
        super(props);
        this.start = this.start.bind(this)
        // this.handleButtonRelease = this.handleButtonRelease.bind(this)
        this.state = {
            // SecondsForEachPage: 45,
            currentTimerSeconds: null,
            // startPage: 1,
            isRunning: false
            // buttonPressTimer: null
        };
    }
    start = () => {
        this.setState({ isRunning: true })
        if (!this.state.currentTimerSeconds) this.setState({ currentTimerSeconds: this.state.SecondsForEachPage })
        this.mainTimer = setInterval(() => {
            this.setState({ currentTimerSeconds: this.state.currentTimerSeconds - 1 })
            if (this.state.currentTimerSeconds <= 0)
                this.setState({ startPage: this.state.startPage + 1, currentTimerSeconds: this.state.SecondsForEachPage })
        }, 1000);
    }
    pause = () => {
        this.setState({ isRunning: false })
        clearTimeout(this.mainTimer);
    }

    incrementSeconds = (i) => {
        this.setState({ SecondsForEachPage: this.state.SecondsForEachPage + i, currentTimerSeconds: this.state.SecondsForEachPage + i });
        // console.log("SecondsForEachPage: " + this.state.SecondsForEachPage)
    }
    incrementPages = (i) => {
        this.setState({ startPage: this.state.startPage + i });
        // console.log("SecondsForEachPage: " + this.state.SecondsForEachPage)
    }

    render() {
        const { secondsPerPage, onSecondsChange, currentPage, onIncrementSecondsPerPage, incrementCurrentPage } = this.props;
        return (
            <div style={{ minHeight: "800px" }}>
                <div className="fl w-100">

                    <NumberInputCard title="Seconds Per Page" value={secondsPerPage} onChange={onSecondsChange} increment={(i) => onIncrementSecondsPerPage(i)} />
                    <Card>
                        <h1 className="f1" style={{ minWidth: "100px" }}>
                            {(this.state.currentTimerSeconds && secondsPerPage != this.state.currentTimerSeconds) ? this.state.currentTimerSeconds : secondsPerPage}
                        </h1>
                    </Card>
                    <NumberInputCard title="Current Page" value={currentPage} onChange={onSecondsChange} increment={(i) => incrementCurrentPage(i)} />
                </div>

                <div className="fl w-100 ma4">
                    {(!this.state.isRunning) ? <div
                        className="tc grow bg-blue br3 pa3 ma2 dib bw2 white shadow-5"
                        onClick={this.start}
                    > Start
                    </div> :
                        <div
                            style={{ maxWidth: "500px" }}
                            className="tc grow bg-red br3 pa3 ma2 dib bw2 white shadow-5"
                            onClick={this.pause}
                        > Pause
                 </div>
                    }
                </div>
            </div >
        )
    }
}

ReadingBooster.propTypes = {};
ReadingBooster.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReadingBooster);
