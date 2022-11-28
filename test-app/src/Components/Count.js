import React,{useState,useEffect} from "react"
function Count() {
    //UseState with numbers
    const initialCount = 0;
    const [count,setCount] = useState(initialCount)
    //UseState with object
    const [name,setName] = useState({firstName:'',lastName:''})
    //useState with array
    const [items,setItems] = useState([])
    //useEffect with conditionally run effort
    useEffect(()=>{
        console.log('updating..')
        document.title=`${name.firstName} ${name.lastName}`
    },[name])
    const incrementFive =() => {
        for(let i=0;i<5;i++){
            setCount(preCount => preCount+1)
        }
    }
    //Adding numbers to the array when the button is clicked 
    const addNumbers = () => {
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
   return(
    <><div>
           <h1>Count-{count}</h1>
           <button onClick={() => setCount(preCount => preCount+1)}>Increment</button>
           <button onClick={() => setCount(preCount => preCount - 1)}>Decrement</button>
           <button onClick={incrementFive}>Increment5</button>
           <button onClick={() => setCount(initialCount)}>Reset</button>
       </div>
       <div>
            <form>
                <label>FirstName :</label>
                <input type='text' value={name.firstName} 
                onChange={e => setName({...name,firstName: e.target.value})}/>
                <label>LastName :</label>
                <input type='text' value={name.lastName} 
                onChange={e => setName({...name,lastName: e.target.value})}/>
                <h2>Your firstname is :{name.firstName}</h2>
                <h2>Your lastname is :{name.lastName}</h2>
            </form>
        </div>
        <div>
            <button onClick={addNumbers}>Add a numbers</button>
            <ul>
                {items.map(item => (<li key={item.id}>{item.value}</li>))}
            </ul>
        </div>
        </>
   )
}
//using State in class

// import React,{Component} from "react";
// class Count extends Component{
//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }
//     increaseCount=()=>{
//         this.setState({
//             count:this.state.count+1
//         },
//         ()=>{
//             console.log('callback val:',this.state.count)
//         }
//         )
//     }
//     render(){
//         return(
//             <div>
//                 <h1>count -{this.state.count}</h1>
//                 <button onClick={this.increaseCount}>Add</button>
//             </div>
//         )
//     }
// }
export default Count