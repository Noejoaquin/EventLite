import { connect } from 'react-redux';
import Footer from './footer';
import * as SessionActions from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return { ownProps };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
