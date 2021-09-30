import { Component } from "react";
import { Redirect } from "react-router";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

type LoginProps = {
    setToken(tStr: string): void
}
type LoginState = {
    username: string
    password: string
    hasLoggedIn: boolean
}

export class Login extends Component<LoginProps, LoginState>{
    constructor(props: LoginProps){
        super(props)
        this.state = {
            username: "",
            password: "",
            hasLoggedIn: false
        }
    }

    render(){
        return this.state.hasLoggedIn ? <Redirect to="/"/>
        :(
            <>
                {"THIS IS THE Login VIEW"}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.setToken(this.state.username)
                    this.setState({hasLoggedIn: true})
                }
                    }>
                    <div><input type="text" onChange={(e) => { this.setState({username: e.target.value})}} /><br/>
                    <input type="text" onChange={(e) => { this.setState({password: e.target.value})}} /></div>
                    <Button color="success" type="submit"> Login </Button>
                </form>
            </>
        )
    }
}