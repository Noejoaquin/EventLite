import React from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions/category_actions';
import {createEvent, updateEvent, fetchEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => {
  let categories = Object.keys(state.entities.categories).map((id) => state.entities.categories[id])
  let errors = state.errors.event
  let formType = 'new'
  let event = {name: '', description: '', location:'', ticket_type: '', price: 0.0, start_time:'', start_date: '', end_time:'', end_date:'', category_id: null}
  if (ownProps.match.path === '/events/:eventId/edit'){
    formType = 'edit';
    event = this.state.entities.event[ownProps.match.params.eventId]
  }
    return {
    formType,
    errors,
    event,
    categories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.path === '/events/new' ? createEvent : updateEvent;

  return {
    action: (event) => dispatch(action(event)),
    fetchEvent: (id) => dispatch(action(id)),
    fetchCategories:() => dispatch(fetchCategories())
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
