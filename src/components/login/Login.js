import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './Login.css'
export default function Login() {
    return (
        <div className="log">
            <h1>Login Form</h1>
            <form>  
        <div class="container">   
            <label>Username    
            <input type="text" placeholder="Enter Username" name="username"  required/>  
            </label><br/>
            <label>Password   
            <input type="password" placeholder="Enter Password" name="password" required />
            </label>  <br/>
            <button type="submit">Login</button>   <br/>
            <input type="checkbox" /> Remember me <br/> 
            <Link to="./register">Please Register!!!!</Link>
               
              
        </div>   
    </form>     
        </div>
    )
}
