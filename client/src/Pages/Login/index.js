import React from 'react';


const Login = ({ handleLogin, handleLogout }) => {


    return (
        <div>
            <h1>Login</h1>

            <button onClick={handleLogin}>LOGIN</button>
          
            
        </div>
    )

}

export default Login;