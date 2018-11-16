import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import Dashboard from "./containers/Dashboard";
import "tachyons";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/pairs";
import { changeSeconds } from "./sdk/actions";
const mapStateToProps = state => {
  return {
    secondsPerPage: state.secondsPerPage
  };
};

const mapDispatchToProps = Dispatch => ({
  onSecondsChange: event => dispatch(changeSeconds(event.target.value))
});
class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard routes={routes} logo="Manly with Mazen" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
