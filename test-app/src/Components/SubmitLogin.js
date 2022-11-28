import React,{Component} from "react";

class SubmitLogin extends Component {
    ChangePage = (event) => {
        this.state.userName=='Mukesh' ?  alert('Welcome') : alert('Wrong Password') ;
    }
}
export default SubmitLogin