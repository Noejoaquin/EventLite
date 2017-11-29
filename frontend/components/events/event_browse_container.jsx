import React from 'react';
import { connect } from 'react-redux';
import BrowseEvents from './browse_events';
import { fetchEvents } from '../../actions/event_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents:(data) => dispatch(fetchEvents(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseEvents)
