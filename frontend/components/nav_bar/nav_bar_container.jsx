import { connect } from 'react-redux';
import NavBar from './nav_bar';
import * as SessionActions from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  return { currentUser, ownProps };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let logout = SessionActions.logout
  return { logout: () => dispatch(logout()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
