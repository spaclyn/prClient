import { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/home.css'
import 'font-awesome/css/font-awesome.min.css';


type HomeProps = {token: string}
type HomeState = {}


export class Home extends Component<HomeProps, HomeState>{
    constructor(props: HomeProps){
        super(props)
    }

    render(){
        return (
            <>
        <Jumbotron >
          <Container>
            <Row>
              <Col>
                <h1>Welcome to <i id="logo">Progress Report</i></h1><br/>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
            <Row>
                <Col md={6} xs={6}><h1><p id="titlecard"><i className="fa fa-spinner fa-spin"></i></p></h1></Col>
                <Col md={6} xs={6}><br/><p id="blurb"><b id="inblurb">PROGRESS REPORT (IS)</b> a mobile first, simple app that is always updating , always changing. it is <b>BY ARTISTS</b>, <i>FOR ARTISTS</i>. A place where you can stress free journal about your comic or piece plans or progress, come to find why your twitter images keep getting compressed, as well as a all around place to find palettes and tutorials for that one specific thing you've been looking for. Progress Report is ever changing, community feedback is always taken, and we are forever creative.</p> </Col>
            </Row>
        </Container>
                <br/>
                <br/>
                { this.props.token 
                ?  
                    <>
                        <Link to="/members/"><Button color="success" type="submit"> Your Hub</Button></Link>&nbsp;&nbsp;
                        <Link to="/logout"><Button color="success" type="submit"> Logout</Button></Link>
                    </>
                :  
                    <>
                        <Link to="/login"><Button color="success" type="submit">Login</Button></Link>&nbsp;&nbsp;
                        <Link to="/register"><Button color="success" type="submit">Join Us</Button></Link>
                    </>

                }
            </>
        )
    }
}