import React, { Component } from 'react';
import axios from 'axios'
import './App.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
//containers
import GroupsIndexContainer from './containers/GroupsIndexContainer';
import GroupFormContainer from './containers/GroupFormContainer';
import EventContainer from './containers/EventContainer';
import EventShowContainer from './containers/EventShowContainer';
//user 
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
    };
}
  componentDidMount() {
    this.loginStatus()
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

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
    return (
      <div className="App">
          <Router>
              <nav className="text-center p-4">
                <NavLink className="inline-block px-4 py-2" exact activeClassName="active" to="/groups">Groups</NavLink>
                <NavLink exact activeClassName="active" to="/groups/new">New Groups</NavLink>
              </nav>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>

                <Route exact path="/groups">
                <GroupsIndexContainer />
              </Route>
              <Route exact path="/groups/new" component={GroupFormContainer} />
              <Route path="/groups/:groupId/events/new" component={EventContainer} />
              <Route path="/groups/:groupId" component={EventShowContainer} />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
