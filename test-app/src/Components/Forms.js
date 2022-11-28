import React,{Component} from "react";

class Forms extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            comments:'',
            topics:'react'
        }
    }
    changeUsername=(event) => {
        this.setState({
            username:event.target.value
        })
    }
    changeComments = (event) => {
        this.setState({
            comments:event.target.value
        })
    }
    changeTopics = (event) => {
        this.setState({
            topics:event.target.value
        })
    }
    ChangeSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.ChangeSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.changeUsername}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.changeComments}></textarea>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topics} onChange={this.changeTopics}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
export default Forms