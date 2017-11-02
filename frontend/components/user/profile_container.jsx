import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchEvents } from '../../actions/event_actions';
import { deleteAttendance } from '../../actions/attendance_actions';


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


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
