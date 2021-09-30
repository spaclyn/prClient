import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

type HomeProps = {token: string}
type HomeState = {}

export class Home extends Component<HomeProps, HomeState>{
    constructor(props: HomeProps){
        super(props)
    }

    render(){
        return (
            <>
                {"THIS IS THE Home VIEW"}
                  
                <br/>
                { this.props.token 
                ?  
                    <>
                        <Link to="/logout">Logout</Link>
                        <Link to="/member">Member View</Link>
                    </>
                :  
                    <Link to="/login"> <Button color="success" type="submit"> Login </Button> </Link> 
                }
            </>
        )
    }
}