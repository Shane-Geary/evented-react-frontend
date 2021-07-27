import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logoutUser } from '../actions/users';
import { Link } from 'react-router-dom'

class Nav extends Component {

	handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser()
  	}

	render() {
	const auth = (<>
		<Link to='/login'> Login</Link>
		<Link to='/signup'> Signup </Link>
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