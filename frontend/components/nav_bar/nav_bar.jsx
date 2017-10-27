import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {


  render(){

    let nav;
    if (this.props.currentUser){
      nav = (
        <nav className='main-nav'>

          <ul>
            <li><h2>{this.props.currentUser.first_name}</h2></li>
            <li><button onClick={() => this.props.logout()}>logout</button></li>
            <li><Link to='/events/new'>Create An Event</Link></li>
          </ul>
      </nav>
      );
    } else {
      nav = (
        <nav className='main-nav'>

          <ul>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/login'>Create An Event</Link></li>
          </ul>
        </nav>
      );
    }
    return(
      nav
    )
  }
}

export default NavBar;
