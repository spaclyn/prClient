import React, { Component } from 'react';
import { Member } from './members/Member';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom'
import { Login } from './login/Login';
import { Home } from './home/Home';
import { Logout } from './login/Logout';
import { Admin }  from './admin/Admin';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

type AppState = {
  token: string
  role: boolean
  isOpen: boolean
}

class App extends Component<{}, AppState>{
  constructor(props: AppState) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      token: "",
      role: false,
      isOpen: false
    }
  }
  toggle(){
    this.setState({ isOpen: !this.state.isOpen });
  }


  setToken = (tStr: string) => {
    this.setState({token: tStr})
  }

  ifAuthed = (comp: JSX.Element) => {
    return this.state.token ? comp : <Redirect to="/login" />
  }

  ifAdmin = (comp: JSX.Element) => {
    return this.state.role == true ? comp : <Redirect to="/" />
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/">progress report</NavbarBrand> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/resources/">Resources</NavLink>      
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap
                /reactstrap">Entries</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <br/>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Welcome Progress Report</h1><br/>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
          <Switch>
            <Route exact path="/">
              <Home token={this.state.token}/>
            </Route>
            <Route path="/login">
              <Login setToken={this.setToken} />
            </Route>
            <Route path="/logout">
              <Logout setToken={this.setToken} />
            </Route>
            <Route path="/member/">
              {this.ifAuthed(<Member />)}
            </Route>
            <Route path="/admin/">
              {this.ifAdmin(<Admin />)}
            </Route>
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App
