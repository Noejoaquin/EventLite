import React from 'react';
import { Redirect, Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    if(this.props.formType === 'Log In'){
      this.state = {email: '',password: '' }
    } else {
      this.state = {email: '', password: '', first_name: '', last_name: ''}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.revertBackToOriginalState = this.revertBackToOriginalState.bind(this)
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
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
    this.props.login({email: 'guest@guest.com', password: 'starwars'})
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]:e.target.value})
    }
  }

  render(){
    let form;
    let errors = this.props.errors.map((error, idx) =>{
      return (
        <li key={idx}>{error}</li>
        )
    })
    let path = this.props.match.path === '/login' ? '/signup' : '/login'
    let otherFormType = this.props.formType === 'Log In' ? 'Sign Up' : 'Log In';
    let link=<Link id='session-link' to={path}>{otherFormType}</Link>
    if (!this.props.loggedIn){

      if (this.props.match.path === '/login'){
        form = (
          <section className='session-form-parent-login'>
            <h2 className='sesson-greeting-login'>Welcome Back</h2>
            <ul className='session-ul-login'>
              <li>
                {link}
              </li>
            </ul>
            <h4 className='session-type-login'>Please enter your email and password to log in</h4>
          <form className='session-form-login' onSubmit={this.handleSubmit}>
            <ul className='input-list'>
              <li>
                <label className='email-login'>Email</label>
                <input placeholder='Enter email' type='email' onChange={this.handleChange('email')} value={this.state.email} />
              </li>
            <br/>
              <li>
                <label className='password-login'>Password</label>
                <input placeholder='Enter password' type='password' onChange={this.handleChange('password')} value={this.state.password}/>
              </li>
            </ul>
          </form>
          <ul className='login-buttons'>
            <li>
          <button className='submit-login' onClick={this.handleSubmit} type='submit-login'>{this.props.formType}</button>
          </li>
          <li>
          <button className='guest-login' onClick={this.handleGuestLogin}>Guest Login</button>
          </li>
          </ul>
        </section>
        )
      } else {
        form = (
          <section className='session-form-parent-signup'>
            <h2 className='sesson-greeting-signup'>Welcome</h2>
              <ul className='session-ul'>
                <li>
                  {link}
                </li>
              </ul>
            <h4 className='session-type-signup'>Create an account</h4>
              <form className='session-form-signup' onSubmit={this.handleSubmit}>
                <ul className='input-list'>
                  <li>
                   <label className='first-name-signup'> First Name</label>
                   <input placeholder='Enter first name' type='text' onChange={this.handleChange('first_name')} value={this.state.first_name} />
                 </li>
                <br/>
                  <li>
                    <label className='last-name-signup'>Last Name</label>
                    <input placeholder='Enter last name' type='text' onChange={this.handleChange('last_name')} value={this.state.last_name}/>
                  </li>
                <br/>
                <li>
                    <label className='email-signup'> Email</label>
                    <input placeholder='Enter email' type='email' onChange={this.handleChange('email')} value={this.state.email}/>
                  </li>
                <br/>
                <li>
                <label className='password-signup'> Password  </label>
                  <input placeholder='Enter password' type='password' onChange={this.handleChange('password')} value={this.state.password}/>
                  </li>
                </ul>
              </form>
              <ul className='signup-buttons'>
                <li>
                  <button onClick={this.handleSubmit} className='submit-signup'>{this.props.formType}</button>
                </li>
                <li>
                  <button className='guest-login' onClick={this.handleGuestLogin}>Guest Login</button>
                </li>
              </ul>
              <br/>

        </section>
        )
      }
  }
    return (
      <section >

            {form}

      <ul className='errors'>
        {errors}
      </ul>
    </section>
    )
  }
}

export default SessionForm;





// <ul className='session-ul'>
//   <li>
//     {link}
//   </li>
// </ul>
