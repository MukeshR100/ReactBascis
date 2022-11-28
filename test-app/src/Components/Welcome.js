import React,{Component} from "react";
import './StyleSheet.css'

class Message extends Component {
    constructor () {
        super()
        this.state={
            message:'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks for visiting'
        })
    }
    render(){
        return(
            <dev>
                <h1 className='primary'>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click</button>
            </dev>
        )
    }
}
export default Message