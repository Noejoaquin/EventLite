import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents, removeQuery, receiveQuery } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import EventIndex from '../events/event_index';
import { createSave, deleteSave } from '../../actions/save_actions';

const mapStateToProps = (state, ownProps) => {
  let categories = state.entities.categories
  let currentUser = state.session.currentUser
  let allEvents = Object.keys(state.entities.events).map((id) => state.entities.events[id])
  let events = allEvents.filter((event) => state.session.currentUser.managed_events.includes(event.id))
  let query = state.query
  let searchIndex = false;
  let profileContainer = true;
  return {
    currentUser,
    events,
    categories,
    query,
    searchIndex,
    profileContainer
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: (data) => dispatch(fetchEvents(data)),
    createSave: (id) => dispatch(createSave(id)),
    deleteSave: (id) => dispatch(deleteSave(id)),
    fetchCategories: () => dispatch(fetchCategories()),
    removeQuery: () => dispatch(removeQuery()),
    receiveQuery: (query) => dispatch(receiveQuery(query))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
