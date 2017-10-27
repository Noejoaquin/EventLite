import React from 'react';
import Link from 'react-router-dom'

class EventForm extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    if (this.props.match.params.eventId){
      this.props.fetchEvent(this.props.match.params.eventId)
    }
  }

  handleSubmit(e){
    this.props.action(this.state)
  }

  handleChange(field){
    return (e) => {
      this.setState( { [field]:e.target.value } )
    }
  }



  render(){
    let title = this.props.formType === 'new' ? Create An Event : Edit Event;
    return (
      <div className='form-container'>
        <div>
          <h2 className='event-name'></h2>
        </div>
        <nav className='form-nav'>
          <Link to='/root'>Event Sart</Link>
        </nav>
        <div className='event-details-wrapper'>
          <span className='icon-1'></span>
          <h2 className='event-form-section-title-1'></h2>
          <div className='event-details-title'>
          <label>Event Title</label>
          <input type='text' onChange={this.handleChange('name')}>{this.state.name}</input>
          </div>
          <label>Location</label>
          <input type='text' onChange={this.handleChange('location')}>{this.state.location}</input>
          

        </div>


        <span className='icon-2'></span>
        <h2 className='event-form-section-title-2'></h2>

        <span className='icon-3'></span>
        <h2 className='event-form-section-title-3'></h2>
      </div>
    )
  }
}


export default EventForm;
