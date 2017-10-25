import React from 'react';
import Redirect from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    if(this.props.formType === 'Log In'){
      this.state = {email: '', password: '', first_name: '', last_name: ''}
    } else {
      this.state = {email: '',password: '' }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    this.props.processForm(this.state)
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]:e.target.value})
    }
  }


  render(){

    let errors = this.props.errors.map((error, idx) =>{
      return <li key={idx}>{error}</li>
    })
    if (this.props.loggedIn){}
    let form;
    if (this.props.formType === 'Log In'){
      form = (
        <form onSubmit={this.handleSubmit}>
          <label>email
            <input type='text' onChange={this.handleChange('email')}/>
          </label>
          <br/>
          <label>password
            <input type='text' onChange={this.handleChange('password')} />
          </label>
          <button type='submit'>{this.props.formType}</button>
        </form>
      )
    } else {
      form = (
        <form onSubmit={this.handleSubmit}>
          <label> email
            <input type='text' onChange={this.handleChange('email')} />
          </label>
          <br/>
          <label> first name
            <input type='text' onChange={this.handleChange('first_name')}/>
          </label>
          <br/>
          <label>last name
            <input type='text' onChange={this.handleChange('last_name')} />
          </label>
          <br/>
          <label> password
            <input type='text' onChange={this.handleChange('password')} />
          </label>
          <br/>
          <button type='submit'>{this.props.formType}</button>

      </form>
      )
    }
    return (
      form

    )
  }
}

export default SessionForm;
