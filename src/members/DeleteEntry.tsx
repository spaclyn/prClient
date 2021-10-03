import { Component } from "react";
import { Redirect } from "react-router";

type DeleteProps = {
    setToken(tStr: string): void
}
type DeleteState = {

}

const accessToken = localStorage.getItem('sessionToken')


export class DeleteEntry extends Component<DeleteProps, DeleteState>{
    constructor(props: DeleteProps){
        super(props)
    }


    render() {

        fetch(`http://localhost:3000/user/login`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }),
        })
        .then(() => {})

        return(
            <>
            </>
        )
    }
}