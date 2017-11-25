import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { createSave, deleteSave } from '../../actions/save_actions';


const mapStateToProps = (state, ownProps) => {
  debugger
  let events = Object.keys(state.entities.events).map((id) => state.entities.events[id]);
  let categories = state.entities.categories
  let currentUser = state.session.currentUser
  return {
    currentUser,
    events,
    categories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchCategories: () => dispatch(fetchCategories()),
    createSave: (id) => dispatch(createSave(id)),
    deleteSave: (id) => dispatch(deleteSave(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)
