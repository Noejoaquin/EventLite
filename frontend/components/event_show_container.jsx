import React from 'react';
import { connect } from 'react-router-dom';


const mapStateToProps = (state, ownProps) = =>{
  let event = state.entities.events[ownProps.match.params.eventId];
  return {
    event
  }
}
