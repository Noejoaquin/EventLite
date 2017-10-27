import React from 'react';
import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';


const mapStateToProps = (state, ownProps) => {
  let categories = state.entities.categories
  let events = Object.keys(state.entities.events).map((id) => state.entities.events[id]);
  return {
    events,
    categories
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchCategories: () => dispatch(fetchCategories())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventIndex)
