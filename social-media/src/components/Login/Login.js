import '../../stylesheets/App.css';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="loginContainer pt-4">
            <h3 className="loginContent loginTitle">Login</h3>
            <form className="loginForm">
               <div className="form-group mb-2">
                    <label className="loginLabel">Username:</label>
                    <input type="text" placeholder="Enter username" 
                            value={username} className="form-control" 
                            onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group mb-4">
                    <label className="loginLabel">Password:</label>
                    <input type="password" placeholder="Enter password" 
                            value={password} className="form-control"
                            onChange={(e) => setPassword(e.target.password)} />
                </div>
                <Button variant="primary loginButton mb-4">Submit</Button>
            </form>
        </div>
    );
};

export default Login;