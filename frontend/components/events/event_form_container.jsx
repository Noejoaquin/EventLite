import React from 'react';
import { connect } from 'react-redux'
import { createEvent, updateEvent, fetchEvent, fetchCategories } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => {
  let errors = state.errors.event
  let formType = 'new'
  let event = {name: '', description: '', location:'',ticket_type: '', price: 0.0, start_time:'', end_time:''}
  if (ownProps.match.path === '/events/:eventId/edit'){
    formType = 'edit';
    event = this.state.entities.event[ownProps.match.params.eventId]
  }
    return {
    formType,
    errors,
    event
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.path === '/events/new' ? createEvent : updateEvent;

  return {
    action: (event) => dispatch(action(event)),
    fetchEvent: (id) => dispatch(action(id)),
    fetchCategories: () => dispatch(fetchCategories())
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm)
