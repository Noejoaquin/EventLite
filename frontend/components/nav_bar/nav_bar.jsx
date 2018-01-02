import React from 'react';
import { Link } from 'react-router-dom';
// <button id='create-event'>Create An Event</button>
import SearchBarContainer from '../search/search_bar_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(){
    this.props.logout();
  }

  render(){
    let nav;
    let createEventLink;
    let landingPageLink;
    let browseEventsLink;
    let  profileLink = <Link to={`/users/${this.props.currentUser.id}`}><button id='organizer-profile-link'>Profile</button></Link>

    let searchBar = this.props.location.pathname === '/' ? <div></div> : <SearchBarContainer props={this.props}/>
    if (this.props.currentUser){
      if (this.props.location.pathname.includes('events') && !this.props.location.pathname.includes('events/')){
        browseEventsLink = <button className='browse-link' id='browse-events'>Browse Events</button>
      } else {
        browseEventsLink = <Link to='/events'><button className='browse-link' id='browse-events'>Browse Events</button></Link>
      }

      if (this.props.location.pathname === '/'){
        landingPageLink = <button className='header-title'>eventLite</button>
        } else {
          landingPageLink = <Link className='header-title' to='/'>eventLite</Link>
          }

      if (this.props.location.pathname === '/events/new' ){
          createEventLink = <button id='create-event'>Create An Event</button>
      } else {
          createEventLink = <Link to='/events/new'><button id='create-event' >Create An Event</button></Link>
        }
      nav = (
        <header>
          <div>
            <div className='header-title-container'>
              {landingPageLink}
              <div className='search-form'>
                {searchBar}
              </div>
              <nav className='links-container' >
                <ul className='nav-links'>
                  {browseEventsLink}
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
                            <button id='logout-button' onClick={this.handleLogout}><Link to='/'>Log out</Link></button>
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
      if (this.props.location.pathname.includes('events')){
        browseEventsLink = <button id='browse-events'>Browse Events</button>
      } else {
        browseEventsLink = <button id='browse-events'><Link to='/events'>Browse Events</Link></button>
      }
      if (this.props.location.pathname === '/'){
        landingPageLink = <button className='header-title'>eventLite</button>
        } else {
          landingPageLink = <Link className='header-title' to='/'>eventLite</Link>
          }
      nav = (
        <header>
            <div className='header-title-container'>
              {landingPageLink}
          <nav className='links-container' >
            <ul className='nav-links'>
              {browseEventsLink}
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
