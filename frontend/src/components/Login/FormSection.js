import React, { useContext, useState } from 'react'
import axios from 'axios'
import { LoginContext } from '../Context/LoginContext'
import { useNavigate } from 'react-router-dom'

const FormSection = () => {
    const history = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useContext(LoginContext)

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }


    const onFinish = (e) => {
        e.preventDefault();
        
        axios.get('http://localhost:5000/api/login', {headers: {
            'username': username,
            'password' : password
        }})
        .then(res => {
            setAuth(res.data.authenticated);
            localStorage.setItem('authenticated', res.data.authenticated);

            history('/admin');
        })
    }

    return (
        <div className='col-md-6'>
            <h4 className="login-text mb-3">Login</h4>
            <form method='POST' onSubmit={onFinish}>
                <div className="form-group">
                    <i className="bi bi-person-fill"></i>
                    <label htmlFor="email"> Username </label>
                    <input type="text" name="email" className="form-control1" value={username} onChange={usernameHandler}/>
                </div>
                <div className="form-group">
                    <i className="bi bi-key-fill"></i>
                    <label htmlFor="password"> Password </label>
                    <input type="password" name="password" className="form-control1" value={password} onChange={passwordHandler}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
                    <label className="form-check-label" htmlFor="checkbox"> Remember me </label>
                </div>
                <button className="btn btn-block" style={{ borderColor: "#003048fa" }}>Login</button>
            </form>
        </div>
    )
}

export default FormSection