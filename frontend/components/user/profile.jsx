import React from 'react';
import EventProfileTabsContainer from './event_profile_tabs_container';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchUsers()
  }

  render(){
    if (this.props.currentUser === undefined) {
      return null
    } else {

      let name = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name
      return (
        <div className='meta-profile-page-container'>
          <div className='profile-page-container'>
            <div className='profile-header'>
              <div className='primary-header'>
                {name}
              </div>
              <div className='edit-profile'>
                <a className='edit-profile-link'>Edit Profile</a>
              </div>
            </div>
          </div>
          <EventProfileTabsContainer currentUser={this.props.currentUser}/>
        </div>
      )
    }
  }
}

export default Profile
