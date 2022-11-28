import React,{Component} from "react";
import './SubmitLogin.js'
import './StyleSheet.css'

class LoginForm extends Component {
    constructor() {
        super()
        this.state={
            userName:'',
            password:''
        }
    }
    changeUserName = (event) => {
        this.setState({
            userName:event.target.value
        })
    }
    changePassword = (event) => {
        this.setState({
            password:event.target.value
        })
    }
    ChangePage = (event) => {
        this.state.userName=='Mukesh' ?  alert('Welcome') : alert('Wrong Password') ;
    }
    render(){
        return(
            <form className="page" onSubmit={this.ChangePage}>
                <div>
                    <label className="uname">Username :</label>
                    <input type="text" placeholder="username"  value={this.state.userName} onChange={this.changeUserName}/>
                </div>
                <div>
                    <label className="pas">Password :</label>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.changePassword}/>
                </div>
                <button className="sub" type="submit">Login</button>
            </form>
        )
    }
}
export default LoginForm