import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import { Redirect } from "react-router";
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";

const SidebarItem = styled.li`
    height: 50px;
    line-height:50px;
    display:block;
    width:100%:
    padding: 8px 16px;
    // border-bottom:1px solid;
    cursor: pointer;
    // background-color: #0c0c0c;
`;
const Root = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
`;
const Logo = styled.label`
  width: ${props => (props.isOpened ? "220px" : "0px")};
  height: 56px;
  display: block;
  background-color: rgba(0, 0, 0, 0.2);
  color: #222;
  font-weight: bold;
`;
const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width:100%:
    flex:1;
    min-height:100%;
    overflow-x:hidden;
    // overflow-y:auto;
    background-color:rgba(0,0,0,.1);
`;

const Sidebar = styled.div`
  min-width: ${props => (props.isOpened ? "220px" : "0")};
  width: ${props => (props.isOpened ? "220px" : "0")};
  height: 100%;
  // background-color: rgba(240, 240, 0, 0.2);
  background-color: #000000;
  display: flex;
  flex-flow: column nowrap;
`;

const Content = styled.div`
  flex: 1;
  background-color: #2a2a2a;
`;

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    componen={route.component}
    // render={props => {
    //   <route.component {...props} routes={route.routes} />;
    // }}
  />
);

export default class Dash extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened: false,
      username: "Username"
    };
  }
  toggleSideBar = () => {
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    });
  };
  navigate = selected =>
    this.setState({
      selected
    });

  render() {
    return (
      <Root>
        <Router>
          <div>
            <Navbar
              className=""
              title="Manly with Mazen"
              sidebarAction={this.toggleSideBar}
            >
              {this.state.sidebarOpened ? (
                <Logo isOpened={this.state.sidebarOpened}>
                  {this.props.logo}
                </Logo>
              ) : (
                ""
              )}
            </Navbar>
            <Container>
              <Sidebar
                style={{ zIndex: 3, position: "absolute", minHeight: "800 px" }}
                // className="bg-silver"

                isOpened={this.state.sidebarOpened}
                navigate={this.navigate}
              >
                {!this.state.sidebarOpened ? (
                  ""
                ) : (
                  <div style={{ minHeight: "20px" }}>
                    <a onClick={this.toggleSideBar}>
                      <h1
                        // style={{ right: "1rem", marginBottom: "20px" }}
                        style={{ marginLeft: "80%" }}
                        class="f5 lh-copy white"
                      >
                        X
                      </h1>
                    </a>
                  </div>
                )}
                {!this.state.sidebarOpened
                  ? ""
                  : this.props.routes.map(route =>
                      route.label === "Preview" ? (
                        ""
                      ) : (
                        <Link
                          class="no-underline white mt3 grow dim"
                          to={route.path}
                          onClick={this.toggleSideBar}
                        >
                          {" "}
                          <SidebarItem>{route.label}</SidebarItem>{" "}
                        </Link>
                      )
                    )}
              </Sidebar>
              <Content
                style={{ width: "100%", height: "100%", position: "absolute" }}
              >
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/home-page" />}
                  />
                  {this.props.routes.map(route => (
                    <Route
                      key={route.key}
                      {...route}
                      path={route.path}
                      render={() => (
                          <route.component {...this.props} />
                      )}
                    />
                  ))}
                </Switch>
              </Content>
            </Container>
          </div>
        </Router>
      </Root>
    );
  }
}
