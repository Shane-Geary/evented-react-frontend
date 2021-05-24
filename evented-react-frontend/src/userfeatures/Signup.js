import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from '../actions/userActions';
class Signup extends Component {
  state = {
    username: "",
    password: ""
  }

    handleChange = event => {
        this.setState({
        [event.target.name]: event.target.value
        });
    }
 
    handleSubmit = event => {
        event.preventDefault()
        this.props.register(this.state)
    }
 
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h1>Sign Up Below</h1>
 
            <label>Username</label>
            <input
            name='username'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChange}
            /><br/>
 
            <label>Password</label>
            <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            /><br/>
 
            <input type='submit'/>
        </form>
        )
    }
}
 
const mapDispatchToProps = dispatch => ({
    register: userInfo => dispatch(register(userInfo))
})
 
export default connect(null, mapDispatchToProps)(Signup);
