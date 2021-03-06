import React from 'react';
import { connect } from 'react-redux';
import { fetchEvents, receiveQuery, removeQuery } from '../../actions/event_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state, ownProps) => {
  let passedProps = ownProps.props
  let query = state.query.name
  let input = '';
  return {passedProps, query, input}
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveQuery: (string) => dispatch(receiveQuery(string)),
    removeQuery: () => dispatch(removeQuery())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
