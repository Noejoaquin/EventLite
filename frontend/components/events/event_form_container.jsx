import React from 'react';
import { connect } from 'react-redux'
import { fetchCategories } from '../../actions/category_actions';
import {createEvent, updateEvent, fetchEvent, clearErrors } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => {
  let categories = Object.keys(state.entities.categories).map((id) => state.entities.categories[id])
  let errors = state.errors.event
  let formType = 'new'
  let dummyEvent = {dummy: true, name: '', description: '', location:'', ticket_type: '',
    price: 0.0, start_time:'', end_time:'', category_id: null, imageFile: '', imageUrl: ''}
  let event = dummyEvent;
  if (ownProps.match.path === '/events/:eventId/edit'){
    formType = 'edit';
    const tempEvent = state.entities.events[ownProps.match.params.eventId]
    debugger
    if (tempEvent){
      event = tempEvent;
    }
  } else {
    debugger
    event = dummyEvent;
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
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    fetchCategories:() => dispatch(fetchCategories()),
    clearErrors: () => dispatch(clearErrors())
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
