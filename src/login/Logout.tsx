import { Component } from "react";
import { Redirect } from "react-router";

type LogoutProps = {
    setToken(tStr: string): void
}
type LogoutState = {
}

export class Logout extends Component<LogoutProps, LogoutState>{
    constructor(props: LogoutProps){
        super(props)
    }

    render(){
        this.props.setToken("")
        return (<Redirect to="/"/>)
    }
}