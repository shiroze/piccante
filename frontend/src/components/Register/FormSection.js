import React, { Component } from 'react';
import axios from 'axios';
import {withCookies} from 'react-cookie';
import {Link} from 'react-router-dom';


class FormSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            type : ''
        }
    }

    doDaftar(){
        const {cookies} = this.props
        const {history} = this.props
        axios.post('http://localhost:8000/register', this.state)
        .then(res=>{
            cookies.set('token', res.data.token, {path : '/login'})
            cookies.set('id', res.data.id, {path : '/'})
            history.push('/login')
        })
        .catch(err=>{
            alert('Username dan password tidak valid')
        })
    }

    render() {
        return (
            <div className='col-md-6'>
                <h4 className="login-text mb-3">Register</h4>
                    <form>
                        <div className="form-group">
                            <i className="bi bi-person-fill mr-2"></i>
                            <label> Username </label>
                            <input type="username" name="username" className="form-control1" onChange={ev=>
                            this.setState({username : ev.target.value})} />
                        </div>
                        <div className="form-group">
                            <i className="bi bi-key-fill mr-2"></i>
                            <label> Password </label>
                            <input type="password" name="password" className="form-control1" onChange={ev=>
                            this.setState({password : ev.target.value})} />
                        </div>
                        <div className="form-group form-check form-check-inline">
                            <input type="radio" name="radios" className="form-check-input" onChange={ev=>
                            this.setState({type : "user"})} / >
                            <label className="form-check-label"> User </label>
                        </div>
                        <div className="form-group form-check form-check-inline">
                            <input type="radio" name="radios" className="form-check-input" onChange={ev=>
                            this.setState({type : "kasir"})} />
                            <label className="form-check-label"> Kasir </label>
                        </div>             
                        <button className="btn btn-block" onClick={this.doDaftar.bind(this)} style={{ borderColor: "#003048fa" }}>Register now</button>                       
                    </form>
            </div>
        )
    }
    
}

export default withCookies(FormSection);