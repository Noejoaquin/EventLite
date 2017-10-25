import React from 'react';
import { Redirect, Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    if(this.props.formType === 'Log In'){
      this.state = {email: '', password: '', first_name: '', last_name: ''}
    } else {
      this.state = {email: '',password: '' }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.revertBackToOriginalState = this.revertBackToOriginalState.bind(this)
  }

  revertBackToOriginalState(){
    if (this.props.formType === 'Log In'){
      this.setState({ email: '', password: ''})
    } else {
      this.setState({email: '', password: '', first_name: '', last_name: ''})
    }
  }

  handleSubmit(e){
    let state = this.state;
    this.props.processForm(state).then(this.revertBackToOriginalState);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.formType !== nextProps.formType){
      this.props.clearErrors();
      this.revertBackToOriginalState()
    }
  }

  handleGuestLogin(){
    this.props.login({email: 'guest@guest.com', password: 'starwars', first_name: 'guest', last_name: 'guest'})
  }



  handleChange(field){
    return (e) => {
      this.setState({[field]:e.target.value})
    }
  }


  render(){
    let form;
    let errors = this.props.errors.map((error, idx) =>{
      return <li key={idx}>{error}</li>
    })
    let path = this.props.match.path === '/login' ? '/signup' : '/login'
    let otherFormType = this.props.formType === 'Log In' ? 'Sign Up' : 'Log In';
    let link=<Link id='session-link' to={path}>{otherFormType}</Link>
    if (!this.props.loggedIn){

      if (this.props.match.path === '/login'){
        form = (
          <section className='session-form-parent-login'>
            <h2 className='sesson-greeting-login'>Welcome Back</h2>
            <h4 className='session-type-login'>Log In</h4>
          <form className='session-form-login' onSubmit={this.handleSubmit}>
            <label className='email-login'>email
              <input type='email' onChange={this.handleChange('email')} value={this.state.email} />
            </label>
            <br/>
            <label className='password-login'>password
              <input type='text' onChange={this.handleChange('password')} value={this.state.password}/>
            </label>
            <button type='submit-login'>{this.props.formType}</button>
          </form>
        </section>
        )
      } else {
        form = (
          <section className='session-form-parent-signup'>
            <h2 className='sesson-greeting-signup'>Welcome</h2>
            <h4 className='session-type-signup'>Sign Up</h4>
            <form className='session-form-signup' onSubmit={this.handleSubmit}>
              <label className='email-signup'> email
              <input  type='email' onChange={this.handleChange('email')} value={this.state.email}/>
              </label>
              <br/>
              <label className='first-name-signup'> first name
                <input type='text' onChange={this.handleChange('first_name')} value={this.state.first_name} />
              </label>
              <br/>
              <label className='last-name-signup'>last name
                <input type='text' onChange={this.handleChange('last_name')} value={this.state.last_name}/>
              </label>
              <br/>
              <label className='password-signup'> password
                <input type='text' onChange={this.handleChange('password')} value={this.state.password}/>
              </label>
              <br/>
              <button type='submit-signup-signup'>{this.props.formType}</button>
              <br/>
              <button type='guest-login-signup' onClick={this.handleGuestLogin()}>Guest Login</button>
          </form>
        </section>
        )
      }
  }
    return (
      <section>
        {link}
        {form}
      <ul>
        {errors}
      </ul>
    </section>
    )
  }
}

export default SessionForm;
