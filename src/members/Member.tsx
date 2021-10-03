import { Component } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

type MemberProps = {}
type MemberState = {}

export class Member extends Component<MemberProps, MemberState>{
    constructor(props: MemberProps) {
        super(props)
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={6} xs={6}><h1><p id="titlecard"><i className="fa fa-spinner fa-spin"></i></p></h1></Col>
                        <Col md={6} xs={6}>
                            <Form>
                                <FormGroup>
                                <Label for="Type">Type</Label>
                                <Input className="Form-Input" type="text" name="Type" placeholder="e.g: 'illustration', 'doodle', 'comic'"></Input>
                                <br/><Label for="Medium">Medium</Label> &nbsp;&nbsp;
                                <select className="custom-select" id="inputGroupSelect04">
                                    <option selected> </option>
                                    <option value="1">Digital</option>
                                    <option value="2">Traditional</option>
                                    <option value="3">Mix</option>
                                </select>
                                <br/><br/>
                                
                                <Label for="Program">Program</Label>
                                <Input className="Form-Input" type="text" name="Program" placeholder="e.g: 'paint tool sai', 'csp', 'photoshop'"></Input>
                                <Label for="Date">Date</Label>
                                <Input className="Form-Input" type="text" name="Date" placeholder="when did you start it, finish it?"></Input>
                                <Label for="Details">Details</Label>
                                <textarea className="form-control" placeholder="get it off your chest...."></textarea>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Link to="/"><Button color="success" type="submit"> Return Home</Button></Link>&nbsp;&nbsp;
                <Link to="/logout"><Button color="success" type="submit"> Logout</Button></Link>
            </>
        )
    }
}