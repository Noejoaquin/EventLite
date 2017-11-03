import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { createAttendance, deleteAttendance } from '../../actions/attendance_actions';
import { createSave, deleteSave } from '../../actions/save_actions';
import { fetchUsers } from '../../actions/user_actions';

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
    createAttendance: (id) => dispatch(createAttendance(id)),
    deleteAttendance: (id) => dispatch(deleteAttendance(id)),
    createSave: (id) => dispatch(createSave(id)),
    deleteSave: (id) => dispatch(deleteSave(id)),
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
