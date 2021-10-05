import { Component } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

type MemberProps = {}
type MemberState = {}

export class Resources extends Component<MemberProps, MemberState>{
    constructor(props: MemberProps) {
        super(props)
    }

    render() {
        return (
            <>
                <Container>

                            <h1><p id="titlecard"><i className="fa fa-spinner"></i></p></h1>
                            We are diligently working on getting this page up and running! sorry for the inconvenience !

                </Container>
                <br />
                <Link to="/"><Button color="success" type="submit"> Return Home</Button></Link>&nbsp;&nbsp;
                <Link to="/logout"><Button color="success" type="submit"> Logout</Button></Link>
            </>
        )
    }
}