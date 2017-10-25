import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, login, clearErrors } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  let loggedIn = state.session.currentUser ? true : false
  let errors = state.errors.session;
  let formType = ownProps.match.path === '/login' ? 'Log In' : 'Sign Up';
  return {
    loggedIn,
    errors,
    formType
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/signup" ? signUp : login;
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: (user) => dispatch(action(user)),
    login: (user) => dispatch(login(user))
   }
;
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
