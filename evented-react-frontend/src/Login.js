import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      errors: ''
     };
}

handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
};

handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this.state 
        let user = {
            username: username,
            password: password
        }

    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(resp => {
            if (resp.data.logged_in) {
                this.props.handleLogin(resp.data)
                this.redirect()
            } else {
            this.setState({
                errors: resp.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
    };
    
    redirect = () => {
        this.props.history.push('/')
    }

    handleErrors = () => {
        return (
            <div>
                <ul>
                {this.state.errors.map(error => {
                    return <li key={error}>{error}</li>
                })}
                </ul>
            </div>
            )
        };

    render() {
        const {username, password} = this.state
        return (
        <div>
            <h1 className="title">Log In</h1>        
            <form onSubmit={this.handleSubmit}>
            <input
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
            />
            <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
            />         
            <h2><button placeholder="submit" type="submit">
                Log In
            </button></h2>          
            <h1 className="title">Or<br></br>
            <br></br>
            <br></br>
            <Link to='/signup'>sign up</Link></h1>
            
            </form>
        </div>
        );
    }
}

export default Login;