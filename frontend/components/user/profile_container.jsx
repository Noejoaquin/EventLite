import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchEvents } from '../../actions/event_actions';
import { deleteAttendance } from '../../actions/attendance_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser;
  if (parseInt(ownProps.match.params.userId) === state.session.currentUser.id){
    currentUser = state.session.currentUser
  } else {
    // this will be the organizer's data being selected
    currentUser = state.entities.users[ownProps.match.params.userId]
  }
  debugger
  return {
    currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteAttendance: (id) => dispatch(deleteAttendance(id)),
    fetchUsers: () => dispatch(fetchUsers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
