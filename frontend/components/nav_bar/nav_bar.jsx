import React from 'react';
import { Link } from 'react-router-dom';
// <button id='create-event'>Create An Event</button>


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let nav;
    let createEventLink;
    let profileLink;
    if (this.props.location.pathname === '/events/new' ){
      createEventLink = <button id='create-event'>Create An Event</button>
    } else {
      createEventLink = <button id='create-event' ><Link to='/events/new'>Create An Event</Link></button>
    }
    if (this.props.location.pathname === `/users/${this.props.currentUser.id}`){
      profileLink = <button id='organizer-profile-link'>Profile</button>
    } else {
      profileLink = <button id='organizer-profile-link'><Link to={`/users/${this.props.currentUser.id}`}>Profile</Link></button>
    }
    if (this.props.currentUser){
      nav = (
        <header>
          <div>
            <div className='header-title-container'>
              <Link className='header-title' to='/'>eventLite</Link>

              <nav className='links-container' >
                <ul className='nav-links'>

                  <li>
                    <div className='dropdown'>
                      <button className='dropbtn'>{this.props.currentUser.first_name}
                        <i className="fa fa-caret-down" aria-hidden='true'></i>
                      </button>
                      <div className='dropdown-content'>
                        <ul className='dropdown-links'>
                          <li>
                            {profileLink}
                          </li>
                          <li>
                            <button id='logout-button' onClick={() => this.props.logout()}><Link to='/'>Log out</Link></button>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </li>
                  {createEventLink}
                </ul>
              </nav>
              <div>

              </div>
          </div>
        </div>
      </header>
      );
    } else {
      nav = (
        <header>
            <div className='header-title-container'>
              <Link className='header-title' to='/'>eventLite</Link>

          <nav className='links-container' >
            <ul className='nav-links'>
              <button><Link to='/login'>Log In</Link></button>
              <button id='create-event'><Link to='/login'>Create An Event</Link></button>
            </ul>
          </nav>
        </div>
      </header>
      );
    }
    return(
      nav
    )
  }
}

export default NavBar;





// <button id='browse-events'><Link to='/events'>Browse Events</Link></button>


// <button id='browse-events'><Link to='/events'>Browse Events</Link></button>
