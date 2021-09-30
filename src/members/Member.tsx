import { Component } from "react";
import { Link } from "react-router-dom";

type MemberProps = {}
type MemberState = {}

export class Member extends Component<MemberProps, MemberState>{
    constructor(props: MemberProps){
        super(props)
    }

    render(){
        return (
            <>
                {"THIS IS THE MEMBER VIEW"}
                <Link to="/">To Home</Link>
            </>
        )
    }
}