import React from 'react';
import { connect } from 'react-redux';
import EventProfileTabs from './event_profile_tabs';
import SavedEventsContainer from './saved_events_container';
import UpcomingEventsContainer from './upcoming_events_container';
import PastEventsContainer from './past_events_container';
import ManagedEventsContainer from './managed_events_container';


const mapStateToProps = (state, ownProps) => {
  let currentUser;
  let panes;
  let tabNames;
  
  if (ownProps.currentUser.id === state.session.currentUser.id){
    currentUser = state.session.currentUser
    tabNames = ['Upcoming Events','Saved Events', 'Past Events', 'Managed Events']
    panes = [UpcomingEventsContainer,SavedEventsContainer, PastEventsContainer, ManagedEventsContainer]
  } else {
    // this will be the organizer's data being selected
    
    currentUser = ownProps
    tabNames = ['Managed Events']
    panes = [ManagedEventsContainer]
  }
  return {
    currentUser,
    tabNames,
    panes
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteAttendance: (id) => dispatch(deleteAttendance(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventProfileTabs)
