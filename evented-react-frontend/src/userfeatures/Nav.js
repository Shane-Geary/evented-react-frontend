import React, { Component } from 'react';
import {logoutUser } from './actions/userActions';
import { Link } from 'react-router-dom'

class Nav extends Component {

	handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  	}

	render() {
	const auth = (<>
		<Link to='/login'> Login</Link>
		<Link to='/signup'> Sign up </Link>
		</>)
		return (
			<nav>
				{this.props.currentUser.username ? 
				<button onClick={this.handleClick}>Log Out</button>
  				: auth
 				}
			</nav>
			)
	}
}

const mapStateToProps = state => ({
    currentUser: state.users.currentUser
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);