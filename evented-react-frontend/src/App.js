import React, { Component } from 'react';
import axios from 'axios'
import './App.css'
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
//containers
import GroupsIndexContainer from './containers/GroupsIndexContainer';
import GroupFormContainer from './containers/GroupFormContainer';
import EventContainer from './containers/EventContainer';
import EventShowContainer from './containers/EventShowContainer';
//user 
import Home from './userfeatures/Home';
import Login from './userfeatures/Login';
import Signup from './userfeatures/Signup';
import Nav from './userfeatures/Nav';

import { connect } from 'react-redux';
import { login, logoutUser, register } from './actions/users';
import { Alert, success } from './helpers/notifications';

class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       isLoggedIn: false,
//       user: {}
//     };
// }

  // componentDidMount = () => {
	//   this.props.getProfile()
  // }

  // loginStatus = () => {
  //   axios.get('http://localhost:3001/auto_login', 
  //   {withCredentials: true})    
  //     .then(resp => {
  //     if (resp.data.auto_login) {
  //       this.handleLogin(resp)
  //     } else {
  //       this.handleLogout()
  //     }
  //   })
  //   .catch(error => console.log('api errors:', error))
  // };

  // handleLogin = ({data}) => {
	//   console.log(data)
  //   this.setState({
  //     isLoggedIn: true,
  //     user: {data}.user
  //   })
  // }

  logout = () => {
    localStorage.removeItem('token')
    this.props.logoutUser()
    success('Thanks for visiting, successfully logged out!')
  }

//   loggedIn = (props) => {
//   if (this.props.isLoggedIn === true) {
//     return <nav className="text-center p-4">
//     <NavLink className="inline-block px-4 py-2" exact activeClassName="active" to="/groups">Groups</NavLink>
//     <NavLink exact activeClassName="active" to="/groups/new">New Groups</NavLink>
//   </nav>;
//   }
//   return <Home />;
// }

  handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(resp => {
      this.handleLogout()
    //   this.state.push('/')
    })
    .catch(error => console.log(error))
  }

// if (this.loggedIn) {
// 	return <div>{this.props.username} is loggged in</div>;
// }

  render() {
     return (
      <div className="App">
        <h1>Welcome {this.props.currentUser.username}!</h1>
          <Router>
          	<nav className="text-center p-4">
          		<NavLink className="inline-block px-4 py-2" exact activeClassName="active" to="/groups">Groups</NavLink>
     			    <NavLink exact activeClassName="active" to="/groups/new">New Groups</NavLink>
   			    </nav>

            <Switch>
                <Route exact path='/' component={Home}/>

                <Route exact path='/login'>
				          <Login login={this.props.login} authErrors={this.props.authErrors} /> 
                </Route>

                <Route exact path='/signup'> 
				          <Signup register={this.props.register} authErrors={this.props.authErrors} /> 
                </Route>

                <Route exact path="/groups">
                <GroupsIndexContainer />
              </Route>
              <Route exact path="/groups/new" component={GroupFormContainer} />
              <Route path="/groups/:groupId/events/new" component={EventContainer} />
              <Route path="/groups/:groupId" component={EventShowContainer} />
            </Switch>

            <footer>
              <nav>
                <Nav />
              </nav>
            </footer>
          </Router>
		  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authErrors: state.users.errors,
    currentUser: state.users.currentUser,
    users: state.users.all
  }
}

const mapDispatchToProps = dispatch => ({
  register: userInfo => dispatch(register(userInfo)),
  login: userInfo => dispatch(login(userInfo)),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
