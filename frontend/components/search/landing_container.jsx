import React from 'react';
import { connect } from 'react-redux';
// import SearchBar from './search_bar';
import LandingTop from './landing_top';

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return { }
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingTop)
