import React from "react";
import t from "prop-types";
import styled from "styled-components";

const NavbarDiv = styled.div`
    background: ;
    width:100%:
    max-height:56px;
    min-height:56px;
    z-index: 2;
    top:0rem
    display:flex;
`;
class Navbar extends React.PureComponent {
  render() {
    return (
      <NavbarDiv className="shadow-3">
        <a
          className="no-underline grow pa3 bg-grey "
          onClick={this.props.sidebarAction}
          style={{ cursor: "pointer" }}
        >
          <h1 style={{ color: "black" }} class="f5 lh-copy">
            ☰ MENU
          </h1>
        </a>

        <h1
          className="center"
          style={{
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            color: "black"
          }}
          onClick={() => (window.location.href = "../home-page")}
        >
          {this.props.title}
        </h1>
        <a className="no-underline grow pa3 mr3 mt1">SIGN IN</a>
      </NavbarDiv>
    );
  }
}

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
