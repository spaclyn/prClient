import { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/home.css'
//import { User } from "../controllers/users";
//import { throws } from "assert";

type LoginProps = {
    setToken(tStr: string): void
}
type LoginState = {
    email: string
    password: string
    name: string
    handle: string
    hasLoggedIn: boolean
}

export class Login extends Component<LoginProps, LoginState>{
    constructor(props: LoginProps){
        super(props)
        this.state = {
            email: "",
            password: "",
            name: "",
            handle: "",
            hasLoggedIn: false
        }
        
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        //componentDidMount()
        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data)=> {
            //console.log(data)
            this.props.setToken(data.user)
            this.props.setToken(data.sessionToken)
        }).catch(err => console.log(err))
    }
    

    render(){


        return this.state.hasLoggedIn ? <Redirect to="/member/"/>
        :(
            <>
                {""}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.setToken(this.state.email)
                    this.setState({hasLoggedIn: true})
                }
                    }>
                        <h1><p id="titlecard"><i className="fa fa-spinner"></i></p></h1>
                        <br/>
                    <div><input type="email"  placeholder="email" onChange={(e) => { this.setState({email: e.target.value})}} /><br/>
                    <input type="password" placeholder="password" onChange={(e) => { this.setState({password: e.target.value})}} /></div>
                    <br/><Button color="success" type="submit"> Login </Button><br/>
                    <Link to="/register"><i>don't have an account with us?</i></Link>
                </form>
            </>
        )
    }
}