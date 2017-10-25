import React from 'react';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    this.props.processForm()
  }


  render(){
    let form;
    if (this.props.formType === 'Log In'){
      form = (
        <form onSubmit={this.handleSubmit}>
          <label>email
            <input type='text'/>
          </label>
          <br/>
          <label>password
            <input type='text' />
          </label>
          <button type='submit'>{this.props.formType}</button>
        </form>
      )
    } else {
      form = (
        <form onSubmit={this.handleSubmit}>
          <label> email
            <input type='text'/>
          </label>
          <br/>
          <label> first name
            <input type='text'/>
          </label>
          <br/>
          <label>last name
            <input type='text' />
          </label>
          <br/>
          <label> password
            <input type='text' />
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
