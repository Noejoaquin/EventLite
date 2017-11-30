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
    this.errorConstructor = this.errorConstructor.bind(this);
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

  errorConstructor(field, errors) {
    const error = eval(this.props.errors[field]);
    if (error){
      if (field === 'email'){
        return <p className='session-error'>Email {`${errors.email}`}</p>
      } else if (field === 'first_name') {
        return <p className='session-error' >First name {`${errors.first_name}`}</p>
      } else if (field === 'last_name') {
        return <p className='session-error' >Last name {`${errors.last_name}`} </p>
      } else if (field === 'password'){
        return <p className='session-error'>Password {`${errors.password}`}</p>
      }
    }
  }


  render(){
    let form;
    let path = this.props.match.path === '/login' ? '/signup' : '/login'
    let otherFormType = this.props.formType === 'Log In' ? 'Sign Up' : 'Log In';
    let link=<Link id='session-link' onClick={this.props.clearErrors} to={path}>{otherFormType}</Link>

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
                <ul className='email'>
                  <li className='input'>
                    <label className='email-signup'> Email</label>
                    <input id='login-email' type='email' onChange={this.handleChange('email')} value={this.state.email}/>
                  </li>
                </ul>
              </li>
              <li>
                <ul className='password'>
                  <li className='input'>
                    <label className='password-signup'> Password  </label>
                    <input id='login-password' type='password' onChange={this.handleChange('password')} value={this.state.password}/>
                    <p id='login-error'>{this.props.errors}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </form>
          <ul className='login-buttons'>
            <ul className='buttons'>
              <li className='signup'>
                <button onClick={this.handleSubmit} id='login-button'>{this.props.formType}</button>
              </li>
              <li className='guest'>
                <button className='guest-login' onClick={this.handleGuestLogin}>Guest Login</button>
              </li>
            </ul>
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
                    <ul className='email'>
                      <li className='input'>
                        <label className='email-signup'> Email</label>
                        <input type='email' onChange={this.handleChange('email')} value={this.state.email}/>
                        {this.errorConstructor('email', this.props.errors)}
                      </li>
                    </ul>
                    <ul className='first-last-name'>
                      <ul className='input'>
                        <li>
                          <label className='first-name-signup'> First Name</label>
                        </li>
                        <li>
                          <input type='text' id='input-first-name' onChange={this.handleChange('first_name')} value={this.state.first_name} />
                          {this.errorConstructor('first_name', this.props.errors)}
                        </li>
                      </ul>
                      <ul>
                        <ul className='input'>
                          <li>
                            <label className='last-name-signup'>Last Name</label>
                          </li>
                          <li>
                            <input type='text' id='input-last-name' onChange={this.handleChange('last_name')} value={this.state.last_name}/>
                            {this.errorConstructor('last_name', this.props.errors)}
                          </li>
                        </ul>
                      </ul>
                    </ul>
                  </li>
                  <br/>
                  <li>
                    <ul className='password'>
                      <li className='input'>
                        <label className='password-signup'> Password  </label>
                        <input type='password' onChange={this.handleChange('password')} value={this.state.password}/>
                        {this.errorConstructor('password', this.props.errors)}
                      </li>
                    </ul>
                  </li>
                </ul>
              </form>
              <ul className='login-buttons'>
                <ul className='buttons'>
                  <li className='signup'>
                    <button onClick={this.handleSubmit} className='submit-signup'>{this.props.formType}</button>
                  </li>
                  <li className='guest'>
                    <button className='guest-login' onClick={this.handleGuestLogin}>Guest Login</button>
                  </li>
                </ul>
              </ul>
              <br/>

        </section>
        )
      }
  }
    return (
        <section>
            {form}
        </section>
    )
  }
}

export default SessionForm;
