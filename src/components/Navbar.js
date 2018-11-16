import React from "react";
import t from "prop-types";
import styled from "styled-components";

const NavbarDiv = styled.div`
    background:black;
    color:#222;
    width:100%:
    max-height:56px;
    min-height:56px;
    // overflow: hidden;
    // position:absolute;
    top:0rem
    display:flex;
    // opacity:;
`;
class Navbar extends React.PureComponent {
  render() {
    return (
      <NavbarDiv className="shadow-3">
        <a
          className="no-underline grow pa3 bg-grey white "
          onClick={this.props.sidebarAction}
        >
          <h1 class="f5 lh-copy">☰ MENU</h1>
        </a>

        <h1
          className="center"
          style={{
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            color: "white"
          }}
          onClick={() => (window.location.href = "../home-page")}
        >
          {this.props.title}
        </h1>
      </NavbarDiv>
    );
  }
}

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
