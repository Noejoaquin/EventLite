import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import { deleteAttendance } from '../../actions/attendance_actions';
import { fetchCategories } from '../../actions/category_actions';
import EventIndex from '../events/event_index';


const mapStateToProps = (state, ownProps) => {
  let categories = state.entities.categories
  let allEvents = Object.keys(state.entities.events).map((id) => state.entities.events[id])
  let events = allEvents.filter((event) => state.session.currentUser.attending_events.includes(event.id))
  return {
    events,
    categories
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    deleteAttendance: (id) => dispatch(deleteAttendance(id)),
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
