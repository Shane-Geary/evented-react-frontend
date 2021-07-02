import React, { Component } from 'react';
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
import { login, logoutUser, register, getProfile } from './actions/users';
import { Alert, success } from './helpers/notifications';

class App extends Component {

  componentDidMount = () => {
	  this.props.getProfile()
  }

  render() {
     return (
      <div className="App">
        <h1>Welcome {this.props.currentUser.username}!</h1> 
          <Router>
          	<nav className="text-center p-4">
          		<NavLink className="inline-block px-4 py-2" exact activeClassName="active" to="/groups">Groups</NavLink>
     			    <NavLink exact activeClassName="active" to="/groups/new">New Group</NavLink>
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
  logoutUser: () => dispatch(logoutUser()),
  getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
