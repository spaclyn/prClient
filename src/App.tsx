import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import { Member } from './members/Member';
import { Home } from './home/Home';
import { Login } from './login/Login';
import { Logout } from './login/Logout';
import { Register } from './login/Register';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styling/style.css';
import 'font-awesome/css/font-awesome.min.css';

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
          <NavbarBrand href="/">&nbsp; <i className="fa fa-spinner fa-spin"></i>  progress report</NavbarBrand> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">resources</NavLink>      
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <br/>
          <Switch>
            <Route exact path="/">
              <Home token={this.state.token}/>
            </Route>
            <Route path="/login">
              <Login setToken={this.setToken} />
            </Route>
            <Route path="/register">
              <Register setToken={this.setToken} />
            </Route>
            <Route path="/logout">
              <Logout setToken={this.setToken} />
            </Route>
            <Route path="/member/">
              {this.ifAuthed(<Member />)}
            </Route>
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App
