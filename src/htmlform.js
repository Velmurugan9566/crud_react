import { useState } from "react";
import { BrowserRouter,Route,Routes,Link} from "react-router-dom";
import App from './App';
import ChangeColor from "./ChangeColor";
import Addlist from './Addlist';
import Cssexample from './Cssexample';
function Register(){
   
    const [input,setinput] =useState({});
    function formhandle(e){
        e.preventDefault();
        //alert('form submitted');
        console.log(input);
        setinput({})
        
    }
    function oninput(e){
        const name = e.target.name;
        const value = e.target.value;
        setinput((pre)=> {return {...pre,[name]:value}});
    }
    return (
         <>
          <BrowserRouter>
          <ul>
            <li><Link to='/'>Register</Link> </li>
              <li><Link to='/App'>App.Js</Link></li>  
              <li><Link to='/ChangeColor'>ChangeColor</Link>
           </li>  
          </ul>
          <Routes>
            <Route path='/' element={<Addlist/>} />
            <Route path='/App' element={<App/>} />
            <Route path='/ChangeColor' element={<ChangeColor/>} />
            <Route path='/Cssexample' element={<Cssexample/>} />
          </Routes>
          </BrowserRouter>
        <form onSubmit={formhandle}>
       <lable name='name' >Enter your name</lable> 
        <input type='text' name='name' onChange={oninput} value={input.name}></input>
       <br/>
        <lable name='age'>Enter your Age</lable> 
        <input type='text' name='age' onChange={oninput} value={input.age}></input><br/>
        <lable name='phone'>Enter your Phone Number</lable> 
        <input type='text' name='Phoneno' onChange={oninput} value={input.Phoneno}></input><br/>
        <lable name='city'>select your City</lable> 
        <select name='city' onChange={oninput} value={input.city}>
            <option>select</option>
            <option value='Tirunelveli'>Tirunelvelli</option>
            <option value='Madurai'>Madurai</option>
            <option value='chennai'>Chennai</option>
            </select><br/>
            <lable name='gender'>select gender</lable> 
            <input type='radio' name='gender' onChange={oninput} value={input.gender}/>Male<input type='radio' name='gender' onChange={oninput} value={input.gender}/>Female<br/>
            <center><input type='submit' name='sub' value='Submit'/>
            </center>
            </form>
            <h2>{input.name}</h2>
        </>
    )
}

export default Register;