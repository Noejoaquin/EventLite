import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents, removeQuery, receiveQuery } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { createSave, deleteSave } from '../../actions/save_actions';

const mapStateToProps = (state, ownProps) => {
  let routeInfo = ownProps.props.props;
  let categories = state.entities.categories;
  let currentUser = state.session.currentUser;
  let query = state.query;
  let events = Object.keys(state.entities.events).map((id) => state.entities.events[id]);
  let searchIndex = false;
  let profileContainer = false;
  return {
    currentUser,
    events,
    categories,
    query,
    searchIndex,
    routeInfo,
    profileContainer
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: (data) => dispatch(fetchEvents(data)),
    fetchCategories: () => dispatch(fetchCategories()),
    createSave: (id) => dispatch(createSave(id)),
    deleteSave: (id) => dispatch(deleteSave(id)),
    removeQuery: () => dispatch(removeQuery()),
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)
