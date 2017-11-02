import React from 'react';
import { connect } from 'react-redux';
import EventProfileTabs from './event_profile_tabs';
import SavedEventsContainer from './saved_events_container';
import UpcomingEventsContainer from './upcoming_events_container';
import PastEventsContainer from './past_events_container';

const mapStateToProps = (state, ownProps) => {
  return {
    panes: [SavedEventsContainer, UpcomingEventsContainer, PastEventsContainer],
    currentUser: state.session.currentUser
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteAttendance: (id) => dispatch(deleteAttendance(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventProfileTabs)
