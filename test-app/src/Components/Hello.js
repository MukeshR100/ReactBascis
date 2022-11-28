import React,{Component} from 'react'

const Greet = (props) =>{
    return (
        <div>
        <h1>Hello {props.name} from {props.role}</h1>
        {props.children}
        </div>
        
    )
}

export default Greet
