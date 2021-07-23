import React from 'react'
import Login from '../components/Login'
import RegisterUser from '../components/RegisterUser'


const LoginRegistration = () => {
    return(
        <div className="login-reg-form">
            <div className="login-reg">
                <Login />
                <RegisterUser />
            </div>
        </div>
    )
}


export default LoginRegistration