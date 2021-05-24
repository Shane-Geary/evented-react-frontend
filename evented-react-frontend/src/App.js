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

import { connect } from 'react-redux';
import { getProfile } from './actions/users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
    };
}
  componentDidMount = () => {
	  this.props.getProfile()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})    
      .then(resp => {
      if (resp.data.logged_in) {
        this.handleLogin(resp)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  handleLogin = ({data}) => {
	  console.log(data)
    this.setState({
      isLoggedIn: true,
      user: {data}.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  loggedIn = (props) => {
  if (this.props.isLoggedIn === true) {
    return <nav className="text-center p-4">
    <NavLink className="inline-block px-4 py-2" exact activeClassName="active" to="/groups">Groups</NavLink>
    <NavLink exact activeClassName="active" to="/groups/new">New Groups</NavLink>
  </nav>;
  }
  return <Home />;
}

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
		  Welcome {this.state.username}!
          <Router>
          	<nav className="text-center p-4">
          		<NavLink className="inline-block px-4 py-2" exact activeClassName="active" to="/groups">Groups</NavLink>
     			<NavLink exact activeClassName="active" to="/groups/new">New Groups</NavLink>
   			</nav>;
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' render={ (props) => 
				<Login {...props} handleLogin={this.handleLogin} /> }/>
                <Route exact path='/signup' render={ (props) => 
				<Signup {...props} handleLogin={this.handleLogin} /> }/> 

                <Route exact path="/groups">
                <GroupsIndexContainer />
              </Route>
              <Route exact path="/groups/new" component={GroupFormContainer} />
              <Route path="/groups/:groupId/events/new" component={EventContainer} />
              <Route path="/groups/:groupId" component={EventShowContainer} />
            </Switch>
			<footer>
			<h3>
				{
        			this.loginStatus ? 
        			<Link to='/' onClick={this.handleClick}>Log Out</Link> : 
        			null
     			}
			</h3>
		  </footer>
          </Router>
		  
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
	getProfile: () => dispatch(getProfile())
}

export default connect(null, mapDispatchToProps)(App);
