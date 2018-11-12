import React from "react";
import t from "prop-types";
import Card from "./Card";

class NumberInputCard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.handleButtonPress = this.handleButtonPress.bind(this)
        this.handleButtonRelease = this.handleButtonRelease.bind(this)
        this.state = {}
    }
    handleButtonPress(i) {
        clearTimeout(this.buttonPressTimer);
        this.buttonPressTimer = setInterval(() => {
            if (this.props.value <= 1 && i < 0) return
            this.props.increment(i)
        }, 100
        );
    }


    handleButtonRelease() {
        clearTimeout(this.buttonPressTimer);
    }
    render() {
        return (
            <Card>
                <h2>{this.props.title}</h2>
                <div className="flex">

                    <a className="no-underline grow pa3 br2 bg-blue white mr3 mb3"
                        onMouseDown={() => this.handleButtonPress(-1)} onMouseUp={this.handleButtonRelease}
                    >-</a>
                    <input id="value" style={{ textAlign: "center" }}
                        className="input-reset ba b--black-20 pa2 mb2 mr3 br4"
                        type="number"
                        value={this.props.value}
                        onChange={this.props.onChange}
                        aria-describedby="name-desc"
                    />
                    <a className="no-underline grow pa3 br2 bg-blue white mr3 mb3 fl "
                        onMouseDown={() => this.handleButtonPress(1)} onMouseUp={this.handleButtonRelease}
                    >+</a>
                </div>
            </Card>
        )
    }
}

NumberInputCard.propTypes = {};
NumberInputCard.defaultProps = {};

export default NumberInputCard;
