import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, receiveQuery } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { createAttendance, deleteAttendance } from '../../actions/attendance_actions';
import { createSave, deleteSave } from '../../actions/save_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let categories = state.entities.categories;
  let event = state.entities.events[ownProps.match.params.eventId];
  let currentUser = state.session.currentUser
  return {
    event,
    currentUser,
    categories
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
    receiveQuery: (string) => dispatch(receiveQuery(string)),
    fetchCategories: () => dispatch(fetchCategories()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
