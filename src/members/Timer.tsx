import { Component } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../styling/home.css'
import pomo from '../assets/pomo.png'

type MemberProps = {}
type MemberState = {}

export class Timer extends Component<MemberProps, MemberState>{
    constructor(props: MemberProps) {
        super(props)
    }

    render() {
        return (
            <>
                <Container>

                            <h1><p id="titlecard">00:00</p></h1>
                            START &nbsp;&nbsp;&nbsp;&nbsp;  |  &nbsp;&nbsp;&nbsp;&nbsp; STOP<br/><br/><br/>
                            <p id="pomo">here at <b id="inblurb">Progress Report</b> we believe in and recommend the <i>pomodoro technique</i>.<br/> now you may be asking, "what in the world is that?"<br/> don't worry we got you. check out the graphic below! </p>
                            <img id="doro" src={pomo} alt="doro" />

                </Container>
                <br />
                <Link to="/"><Button color="success" type="submit"> Return Home</Button></Link>&nbsp;&nbsp;
                <Link to="/logout"><Button color="success" type="submit"> Logout</Button></Link>
            </>
        )
    }
}