import React from 'react';
import { connect } from 'react-redux';
import EventProfileTabs from './event_profile_tabs';


const mapStateToProps = (state, ownProps) => {
  return {
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
