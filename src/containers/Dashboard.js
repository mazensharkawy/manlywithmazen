import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import { Redirect } from "react-router";
import Navbar from "../components/Navbar"

const SidebarItem = styled.a`
    height: 50px;
    line-height:50px;
    display:block;
    width:100%:
    padding: 8px 16px;
    border-bottom:1px solid;
    cursor: pointer;
    background-color: black;
    &:hover{
        background-color: #FFF;
        color:black;
    }
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
    overflow-y:auto;
    background-color:rgba(0,0,0,.1);
`;
// const Nav = styled.div`
//   flex: 1;
//   background-color: black;
//   display: flex;
//   flex-flow: row nowrap;
//   align-items: center;
//   justify-content: flex-end;
//   & > * {
//     max-width: 200px;
//     margin: 0 8px;
//     border: 1px solid;
//     height: 56px;
//     line-height: 56px;
//     padding: 4px 8px;
//   }
// `;

const Sidebar = styled.div`
  min-width: ${props => (props.isOpened ? "220px" : "0")};
  width: ${props => (props.isOpened ? "220px" : "0")};
  height: 100%;
  // background-color: rgba(240, 240, 0, 0.2);
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
  toggleSideBar = ()=>{
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    })
  }
  navigate = selected =>
    this.setState({
      selected
    });

  render() {
    return (
      <Root>
        <Router>
          <div>
            <Navbar className="" title= "Manly with Mazen" sidebarAction={this.toggleSideBar}>
              {(this.state.sidebarOpened) ? <Logo isOpened={this.state.sidebarOpened}>{this.props.logo}</Logo> : ""}
              
              
              {/* <Nav>
                <label style={{ color: "white" }} onClick={() => alert(1)}>
                  {this.state.username}
                </label>
              </Nav> */}
            </Navbar>
            <Container className="bg-silver">
              <Sidebar
              style={{zIndex :3, position:"absolute", minHeight:"800 px"}}
              className= "bg-silver"
                isOpened={this.state.sidebarOpened}
                navigate={this.navigate}
              >
                {!this.state.sidebarOpened
                  ? ""
                  : this.props.routes.map(
                    route =>
                    route.label === "Preview" ? (
                      ""
                    ) : (
                      // <SidebarItem key={route.label}>
                      //   <Link to={route.path}><a class="no-underline white mr3 mb3" >{route.label}</a></Link>
                      // </SidebarItem>
                      <Link class="no-underline white" to={route.path} onClick={this.toggleSideBar}> <SidebarItem>{route.label}</SidebarItem> </Link>
                    )
                  )}
              </Sidebar>
              <Content style={{width: "100%", position:"absolute"}}>
                <Switch>
                  <Route exact path="/" render={() => (
                    <Redirect to="/home-page" />
                  )} />
                  {this.props.routes.map(route => (
                    <Route key={route.key}
                      // {...props}
                      {...route}
                      path={route.path}
                      render={() => <route.component {...this.props} />}
                    // component={() => route.component(...this.props)}
                    />
                    // <RouteWithSubRoutes key={route.path} {...route} />
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
