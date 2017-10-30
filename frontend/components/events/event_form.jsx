import React from 'react';
import { DatePicker } from 'react-datepicker';
import moment from 'moment';
import {Link} from 'react-router-dom';
import InputMoment from 'input-moment';
// <DatePicker
//   selected={this.state.startDate}
//   onChange={this.handleChange}
//   />
// <InputMoment
//   moment={this.state.moment}
//   onChange={this.handleChange}
//   onSave={this.handleSave}
//   minStep={1}
//   hourStep={1}
//   prevMonthIcon="ion-ios-arrow-left"
//   nextMonthIcon="ion-ios-arrow-right"
//   />
class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit= this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = this.props.event
  }

  componentDidMount(){
    if (this.props.match.params.eventId){
      this.props.fetchCategories().then(fetchEvent(this.props.match.params.eventId))
    } else {
      this.props.fetchCategories();
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

  handleSelect(e){
    this.setState( {category_id}: e.target.value)
  }



  render(){
    let title = this.props.formType === 'new' ? 'Create An Event' : 'Edit Event';
    let options = this.props.categories.map((category) => {
      return <option key={category.id} value={category.id}>{category.name}</option>
    })
    return (

      <div className='form-container'>
        <div className='event-name-title'>
          <h2 className='event-name'></h2>
        </div>
        <nav className='form-nav'>
          <Link to='/'>Event Start</Link>
        </nav>
        <h1>{title}</h1>
        <div className='wrapper-event-details'>
          <span className='icon-1'></span>
          <h2 className='event-form-section-title-1'></h2>
          <div className='event-details-title'>
            <label>Event Name</label>
            <input type='text' onChange={this.handleChange('name')}></input>
          </div>
          <label>Location</label>
          <input type='text' onChange={this.handleChange('location')}></input>
          <div className='times'>
            <div className='time-start'>
              <ul className='time-list-inputs-start'>
                <label className='date-start'>Starts</label>
                <li>
                  <input id='datetime' type='datetime-local' onChange={this.handleChange('start_date')}></input>
                </li>
                <li>
                  <input type='time' placeholder='12:00pm' onChange={this.handleChange('start_time')}></input>
                </li>
              </ul>
            </div>
            <div className='time-end'>
              <ul className='time-list-inputs-end'>
                <label className='date-end'>End</label>
                <li>
                  <input id='datetime' type='datetime-local' onChange={this.handleChange('end_date')}></input>
                </li>
                <li>
                  <input type='time' placeholder='12:00pm' onChange={this.handleChange('end_time')}></input>
                </li>
              </ul>
            </div>
          </div>
          <div className='Event-image-title-cell'>
            <h3 className='event-image-title'>Event Image</h3>
          </div>

          <div className='event-details-description'></div>
          <div className='event-description-title-cell'>
            <h3 className='event-description-title'>Event Description</h3>
          </div>

          <div className='event-description'>
            <textarea className='description' onChange={this.handleChange('description')} ></textarea>
          </div>

          <div className='wrapper-ticket'>
            <div className='wrapper-ticket-header'>
              <span className='icon-2'></span>
              <h2 className='event-form-section-title-2'>Create Tickets</h2>
            </div>
            <button className='free-ticket-button'>Free Ticket</button>
            <button className='paid-ticket-button'>Paid Ticket</button>
            <button className='donation-ticket-button'>Donation</button>
          </div>

          <div className='wrapper-additional-settings'>
            <div>
              <span className='icon-3'></span>
              <h2 className='event-form-section-title-3'></h2>
            </div>
            <div className='category-select'>
              <select className='categories'>
                {options}
              </select>
            </div>
          </div>

          <button onClick={this.handleSubmit}>Make Your Event Live!</button>
        </div>
      </div>
    )
  }
}


export default EventForm;
