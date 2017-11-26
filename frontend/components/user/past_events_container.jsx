import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents, removeQuery } from '../../actions/event_actions';
import { deleteAttendance } from '../../actions/attendance_actions';
import { fetchCategories } from '../../actions/category_actions';
import EventIndex from '../events/event_index';


const mapStateToProps = (state, ownProps) => {
  let categories = state.entities.categories
  let currentUser = state.session.currentUser
  let allEvents = Object.keys(state.entities.events).map((id) => state.entities.events[id])
  let currentUserEvents = allEvents.filter((event) => state.session.currentUser.attending_events.includes(event.id))
  let events = currentUserEvents.filter((event) => Date.parse(event.start_time) < Date.parse(new Date()) )
  let query = state.query
  let searchIndex = false;

  return {
    currentUser,
    events,
    categories,
    query,
    searchIndex
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: (data) => dispatch(fetchEvents(data)),
    createSave: (id) => dispatch(createSave(id)),
    deleteSave: (id) => dispatch(deleteSave(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    removeQuery: () => dispatch(removeQuery())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
