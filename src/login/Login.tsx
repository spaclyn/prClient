import { Component } from "react";
import { Redirect } from "react-router";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { throws } from "assert";

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

 /*   private handleSubmit = (e) => {
        e.preventDefault()

        fetch("https://nar-sherpa.herokuapp.com/user/register", {
            method: 'POST',
            body: JSON.stringify({user:{email: this.state.email, password: this.state.password, name: this.state.name, location: this.state.location}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res =>  res.json())
            .then((data) => {
                console.log(data)
                props.updateToken(data.sessionToken)
                navCreate()
            })
            .catch(err => console.log(err))
    }*/
    

    render(){
        return this.state.hasLoggedIn ? <Redirect to="/"/>
        :(
            <>
                {"THIS IS THE Login VIEW"}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.setToken(this.state.email)
                    this.setState({hasLoggedIn: true})
                }
                    }>
                    <div><input type="text" onChange={(e) => { this.setState({email: e.target.value})}} /><br/>
                    <input type="text" onChange={(e) => { this.setState({password: e.target.value})}} /></div>
                    <Button color="success" type="submit"> Login </Button>
                </form>
            </>
        )
    }
}