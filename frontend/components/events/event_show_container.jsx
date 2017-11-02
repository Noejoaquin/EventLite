import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { createAttendance } from '../../actions/attendance_actions';

const mapStateToProps = (state, ownProps) => {
  let event = state.entities.events[ownProps.match.params.eventId];
  let currentUser = state.session.currentUser
  return {
    event,
    currentUser
  }
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    createAttendance: (id) => dispatch(createAttendance(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
