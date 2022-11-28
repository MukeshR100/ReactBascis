import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Message from './Components/Welcome';
// import Greet from './Components/Hello';
import Count from './Components/Count';
import Forms from './Components/Forms';
import NameList from './Components/NameList';
import LoginForm from './Components/LoginForm';
import Checking from './Components/Condition';
function App () {
  return (
    <div className="App">
      {/* <Greet name="Mukesh" role="React">
        <p>Front End Developer</p>
      </Greet>
      <Greet name="Akil" role="Java">
      <p>Back End Developer</p>
      </Greet>
      <Greet name="Bala" role="SQL">
      <p>Data Base Developer</p>
      </Greet> */}
      <Message/>
      <Count/> 
      <Checking/> 
      <NameList/>
      <Forms /> 
      <LoginForm />
    </div>
  );
}
export default App;
