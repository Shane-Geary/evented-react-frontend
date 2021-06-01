import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RenderErrors from '../helpers/RenderErrors';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
                password_confirmation: ''
            },
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
        await this.props.register({user: this.state.user})
        if (this.props.authErrors.length === 0) {
            this.props.history.push('/groups')
        }
    }
 
    render() {
        const {user} = this.state
        const canSave = [user.username, user.password, user.password_confirmation].every(Boolean)
        return (
        <div>    
            <form onSubmit={this.handleSubmit}>
                {this.state.submitted && <RenderErrors errors={this.props.authErrors} />}
                <h1 className="title">Sign Up Below</h1>
 
                <label className="label" htmlFor="username">Username</label>
                <input
                type='text'
                name='username'
                placeholder='Username'
                value={user.username}
                onChange={this.handleInputChange}
                /><br/>
                {!canSave? <small>Username Is Required</small>: null}
 
                <label className="label" htmlFor="password">Password</label>
                <input
                type='password'
                name='password'
                placeholder='Password'
                value={user.password}
                onChange={this.handleInputChange}
                /><br/>
                {!canSave? <small>Password Is Required</small>: null}

                <label className="label" htmlFor="password_confirmation">Password Confirmation</label>
                <input
                type='password_confirmation'
                name='password_confirmation'
                placeholder='Password Confirmation'
                value={user.password_confirmation}
                onChange={this.handleInputChange}
                /><br/>
                {!canSave? <small>Passwords Must Match</small>: null} 
 
                <h2><button type="submit" className={`button focus:shadow-outline focus:outline-none ${canSave? 'hover:bg-green-400': ''}`}
                disabled={!canSave}>Sign up</button></h2>
            </form>
            <div className="mb-16 text-gray-dark">
                Already have an account?
                <Link to="/login" className="no-underline border-b border-blue text-blue-600"> Log in</Link>
            </div>
        </div>
        );
    }
}
 
// const mapDispatchToProps = dispatch => ({
//     register: userInfo => dispatch(register(userInfo))
// })
 
export default withRouter(Signup);