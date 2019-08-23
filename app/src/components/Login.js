import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    
    const [credentials, setCredentials] = useState({username: "", password: ""});
    
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/login`, credentials)
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
    };

    return(
        <div className="loginContainer">
            
            <form 
            onSubmit={handleSubmit}
            className="inputContainer">
                
                <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                onChange={handleChange} 
                value={credentials.username}/>

                <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                onChange={handleChange} 
                value={credentials.password}/>
                
                <input type="submit" name="submit" placeholder="Submit" />
            
            </form>

        </div>
    )
};

export default Login;