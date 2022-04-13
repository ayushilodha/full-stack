import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {useEffect, useState} from "react";
let obj;
function App() {
const [UserInput, setUserInput] = useState({
  name : "",
  usn : "",
  gender : '',
  college : "",
  branch : ""
});


const[result,setResult] = useState(0);

 const handleNameChange = (event) => {
  const newObj ={
    name: event.target.value,
    usn: UserInput.usn,
    gender: UserInput.gender,
    college: UserInput.college,
    branch: UserInput.branch
  }
  setUserInput(newObj)
}



/*const obj ={
  name : "Ayushi",
  usn : "1BG19IS009",
  gender : 'F',
  college : "BNMIT",
  branch : "ISE"
}*/

//const{name,usn,gender,college,branch} = obj;

return (
  <div className="App">
    <header className="App-header">
    <h1>{obj}</h1>
    <input placeholder='Name' onChange={handleNameChange} value={UserInput.name} />
    </header>
  </div>
);


}
export default App;
