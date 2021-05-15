import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className="title"><Link to='/login'>Log In</Link></h1>
      <br></br> 
      <h1 className="title">Or</h1>
      <h1 className="title"><Link to='/signup'>Sign Up</Link></h1>
    </div>
  );
};

export default Home;