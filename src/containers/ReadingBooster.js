import React from "react";
import t from "prop-types";
import Card from "../components/Card";
import Scroll from "../components/Scroll"

class ReadingBooster extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleButtonPress = this.handleButtonPress.bind(this)
        this.start = this.start.bind(this)
        this.handleButtonRelease = this.handleButtonRelease.bind(this)
        this.state = {
            SecondsForEachPage: 45,
            currentTimerSeconds: null,
            startPage: 1,
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

    handleButtonPress(i) {
        clearTimeout(this.buttonPressTimer);
        this.buttonPressTimer = setInterval(() => this.incrementSeconds(i), 100);
    }

    handleButtonRelease() {
        clearTimeout(this.buttonPressTimer);
    }
    handlePageButtonPress(i) {
        clearTimeout(this.buttonPressTimer);
        this.buttonPressTimer = setInterval(() => this.incrementPages(i), 100);
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
        return (
            <div style={{ minHeight: "800px" }}>
                <div className="fl w-100">

                    <Card>
                        <h2>Seconds per Page</h2>
                        <div className="flex">

                            <a class="no-underline grow pa3 br2 bg-blue white mr3 mb3"
                                onMouseDown={() => this.handleButtonPress(-1)} onMouseUp={this.handleButtonRelease}
                            >-</a>
                            <input id="name" style={{ textAlign: "center" }}
                                class="input-reset ba b--black-20 pa2 mb2 mr3 br4"
                                type="text" value={this.state.SecondsForEachPage} aria-describedby="name-desc" />
                            <a class="no-underline grow pa3 br2 bg-blue white mr3 mb3 fl "
                                onMouseDown={() => this.handleButtonPress(1)} onMouseUp={this.handleButtonRelease}
                            >+</a>
                        </div>
                    </Card>
                    <Card>
                        <h1 class="f1" style={{ minWidth: "100px" }}>{(this.state.currentTimerSeconds) ? this.state.currentTimerSeconds : this.state.SecondsForEachPage}</h1>
                    </Card>
                    <Card>
                        <h2>Current Page</h2>
                        <div className="flex">

                            <a class="no-underline grow pa3 br2 bg-blue white mr3 mb3"
                                onMouseDown={() => this.handlePageButtonPress(-1)} onMouseUp={this.handleButtonRelease}
                            >-</a>

                            <input id="name" style={{ textAlign: "center" }}
                                class="input-reset ba b--black-20 pa2 mb2 mr3 br4"
                                type="text" value={this.state.startPage} aria-describedby="name-desc" />

                            <a class="no-underline grow pa3 br2 bg-blue white mr3 mb3 "
                                onMouseDown={() => this.handlePageButtonPress(1)} onMouseUp={this.handleButtonRelease}
                            >+</a>
                        </div>
                    </Card>
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
                        // <a className="no-underline grow pa3 br2 bg-red white mr3 mb3 ">Pause</a>
                    }
                </div>
            </div >
        )
    }
}

ReadingBooster.propTypes = {};
ReadingBooster.defaultProps = {};

export default ReadingBooster;
