import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/event_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state, ownProps) => {
  return {}
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
