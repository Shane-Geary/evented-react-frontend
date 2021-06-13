import React, { Component } from 'react';  
import RenderErrors from '../helpers/RenderErrors'; 
import { Link, withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
            
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            submitted: true
        })
        await this.props.login({user: this.state.user})
        if (this.props.authErrors.length === 0) {
            this.props.history.push('/groups')
        }
    }

    render() {
        const {user} = this.state;
        const canSave = [user.username, user.password].every(Boolean)
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                {this.state.submitted && <RenderErrors errors={this.props.authErrors} />}
                <h1 className="title">Welcome back!</h1>
                    <label htmlFor="username">Username</label>
                    <input
                        type='username'
                        name='username' 
                        placeholder='Username'
                        value={user.username}
                        onChange={this.handleInputChange}
                        /><br/>
                    <label htmlFor="password">Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={user.password}
                        onChange={this.handleInputChange}
                        /><br/>
                    <h2><button type="submit">Log In</button></h2>
            </form>
            <p>
            Don't have an account? 
            <Link to='/signup' className="label"> Create an account</Link>
        </p>
        </div>
                )
            }
        }

//   const mapDispatchToProps = dispatch => ({
//     login: userInfo => dispatch(login(userInfo))
//   })

  export default withRouter(Login);