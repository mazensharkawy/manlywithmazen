import React from "react";
import t from "prop-types";
import styled from 'styled-components'

const NavbarDiv = styled.div`
    background:black;
    color:#222;
    width:100%:
    height:56px;
    min-height:56px;
    overflow: hidden;
    display:flex;
`;
class Navbar extends React.PureComponent {
    render() {
        return(

            <NavbarDiv>
                <a
                className="no-underline grow pa3 br2 bg-grey white "
                onClick={this.props.sidebarAction}
              >
                ☰
              </a>
                <h1  className="center" style={{ fontFamily: "Brush Script MT, Brush Script Std, cursive", color: "white" }}>{this.props.title}</h1>
            </NavbarDiv>
        );
    }
}

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
