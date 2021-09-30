import { Component } from "react";
import { Link } from "react-router-dom";

type AdminProps = {}
type AdminState = {}

export class Admin extends Component<AdminProps, AdminState>{
    constructor(props: AdminProps){
        super(props)
    }

    render(){
        return (
            <>
                {"THIS IS THE Admin VIEW"}
                <Link to="/logout">Logout</Link>
                <Link to="/member">Member View</Link>
                <Link to="/home">Home</Link>
            </>
        )
    }
}

