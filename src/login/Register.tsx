import { Component } from "react";
import { Redirect } from "react-router";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/home.css'
//import { User } from "../controllers/users";
//import { throws } from "assert";

type RegProps = {
    setToken(tStr: string): void
}
type RegState = {
    email: string
    password: string
    name: string
    handle: string
    hasLoggedIn: boolean
}

export class Register extends Component<RegProps, RegState>{
    constructor(props: RegProps){
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
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name,
                    handle: this.state.handle,
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
                <h1><p id="titlecard"><i className="fa fa-spinner fa-spin"></i></p></h1> <br/>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.setToken(this.state.email)
                    this.setState({hasLoggedIn: true})
                }
                    }>
                    <div><input type="email"  placeholder="email" onChange={(e) => { this.setState({email: e.target.value})}} /><br/>
                    <input type="password" placeholder="password" onChange={(e) => { this.setState({password: e.target.value})}} /><br/>
                    <input type="text" placeholder="name" onChange={(e) => { this.setState({name: e.target.value})}} /><br/>
                    <input type="text" placeholder="handle" onChange={(e) => { this.setState({handle: e.target.value})}} /></div>
                    <br/> <Button color="success" type="submit"> Register </Button>
                </form>
            </>
        )
    }
}