import React from 'react';
import  DatePicker  from 'react-datepicker';
import {Link} from 'react-router-dom';
import DateTime from 'react-datetime';
import ReactQuill from 'react-quill';
import { isEmpty } from 'lodash';
import shallowCompare from 'react-addons-shallow-compare';
import Geosuggest from 'react-geosuggest';
import merge from 'lodash/merge'

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit= this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFile = this.handleFile.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
    this.errorConstructor = this.errorConstructor.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = this.props.event
    debugger
  }

  componentDidMount(){
    const set = this.setState.bind(this)
    if (this.props.match.params.eventId){
      this.props.fetchCategories();
         if (this.props.event.dummy){
           return this.props.fetchEvent(this.props.match.params.eventId).then((event) =>{
             set(event.event)
           })
         }
    } else {
      this.props.fetchCategories();
    }
  }

  revertBackToOriginalState(){
      this.setState({name: '', description: '', location:'', ticket_type: '',
        price: 0.0, start_time:'', end_time:'', category_id: null, imageFile: '', imageUrl: '', image_url:''})
  }

  componentWillReceiveProps(nextProps){
    if (this.props.formType !== nextProps.formType){
      this.props.clearErrors();
      this.revertBackToOriginalState()
    }
  }

  handleSubmit(e){
    debugger
    let formData = new FormData();
    this.state.id ? formData.append('event[id]', this.state.id) : null
    formData.append("event[name]", this.state.name)
    formData.append("event[description]", this.state.description)
    formData.append("event[location]", this.state.location)
    formData.append("event[ticket_type]", this.state.ticket_type)
    formData.append("event[price]", this.state.price)
    formData.append("event[start_time]", this.state.start_time)
    formData.append("event[end_time]", this.state.end_time)
    formData.append("event[category_id]", this.state.category_id)
    formData.append("event[image]", this.state.imageFile)
    debugger
    this.props.action(formData).then(({event}) => {
      this.props.history.push(`/events/${event.id}`)
    })
  }

  handleLocation(location){
    this.setState({location: location.description})
  }

  handleDescription(description){
    this.setState( { description  } )
  }

  handleChange(field){
    return (e) => {
      this.setState( { [field]:e.target.value } )
    }
  }

  handleFile(e){
    //must adjust for the edit form
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    }

    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  handleDate(field){
    return (moment) => {
      this.setState( { [field]: moment._d })
    }
  }

  handleDelete() {
    debugger
    this.props.deleteEvent(this.props.match.params.eventId).then(({event}) => {
      this.props.history.push(`/users/${this.props.currentUser.id}`)
    })
  }
  // the Omar Torres Special
  errorConstructor(field, errors) {
    let errorMessage;
    const error = eval(this.props.errors[field]);
    if (error){
      errorMessage = <p className='event-error'>You must fill in the required fields</p>
      if (field === 'category'){
        return <p className='event-error'>a category must be selected</p>
      } else if (field === 'ticket_type') {
        return <p className='event-error' >a ticket type must be selected</p>
      } else if (field === 'name') {
        return <p className='event-error' > an event must have a title </p>
      } else if (field === 'start_time'){
        return <p className='event-error'>start time cannot be blank</p>
      } else if (field === 'description'){
        return <p id='description-error'>description cannot be blank</p>
      } else if (field === 'price') {
        return <p className='event-error'>price {`${errors.price}`}</p>
      } else {
        return <p className='event-error' >{field} cannot be blank</p>
      }
    }
  }




  render(){
    let title = this.props.formType === 'new' ? 'Create An Event' : 'Edit Event';
    let options = this.props.categories.map((category) => {
      return <option key={category.id} value={category.id}>{category.name}</option>
    })

    let errorMessage;
    if (Object.values(this.props.errors).length !==0){
      errorMessage = <p className='event-error'>You must fill in the required fields</p>
    }
    let cancelButton = <button onClick={this.handleDelete} className='cancel-button'>Cancel Event</button>
    let startTime = this.state.start_time.length > 0 ? new Date(this.state.start_time) : '';
    debugger
    let endTime = this.state.start_time.length > 0 ? new Date(this.state.end_time) : '';
    let buttonText = this.props.formType === 'edit' ? 'Update Your Event' : 'Make Your Event Live';
    const categoryDefault = this.props.event.category_id ? this.props.event.category_id : 'default'
    debugger
    return (

      <div className='form-container'>
        <ul className='create-form-header'>
          <h1 className='title-header'>{title}</h1>
          {cancelButton}
        </ul>
        <div className='gray-bar'></div>
        <div className='wrapper-event-details'>
          <span className='icon-1'></span>
          <div className='event-form-section-title-1' >
            <h2 >Event Details</h2>
          </div>
          <div className='event-details-title'>
            <label id='title'>Event Title</label>
            <br/>
            {this.errorConstructor('name', this.props.errors)}
            <input id='title' type='text' placeholder='Give it a distinct title' onChange={this.handleChange('name')} value={this.state.name} ></input>
          </div>
          <div className='event-details-location'>
            <label>Location</label>
            {this.errorConstructor('location', this.props.errors)}
            <Geosuggest initialValue={this.state.location} id='location' onSuggestSelect={this.handleLocation} onChange={this.handleLocation} />
            <br/>
          </div>
          <div className='times'>
            <div className='time-start'>
              <ul className='time-list-inputs-start'>
                <label>Starts</label>
                <li>
                  {this.errorConstructor('start_time', this.props.errors)}
                  <DateTime placeholder=''  onChange={this.handleDate('start_time')}  value={startTime}/>
                </li>
              </ul>
            </div>
            <div className='time-end'>
              <ul className='time-list-inputs-end'>
                <label className='date-end'>Ends</label>
                <li>
                  <DateTime placeholder='' onChange={this.handleDate('end_time')} value={endTime} />
                </li>
              </ul>
            </div>
          </div>
          <div className='Event-image-title-cell'>
            <h3 className='event-image-title'>Event Image</h3>
            <input id='image' placeholder='ADD EVENT IMAGE' type='file' onChange={this.handleFile}></input>
            <img id='event-image' src={this.state.imageUrl || window.image_url}/>
          </div>

          <div className='event-details-description'></div>
          <div className='event-description-title-cell'>
            <h3 className='event-description-title'>Event Description</h3>
          </div>

          <div className='event-description'>
            {this.errorConstructor('description', this.props.errors)}
            <div>

              <ReactQuill id='description' onChange={this.handleDescription} value={this.state.description}/>
            </div>
          </div>

          <div className='wrapper-ticket'>
            <div className='wrapper-ticket-header'>
              <span className='icon-2'></span>
              <h2 className='event-form-section-title-2'>Create Tickets</h2>
            </div>
              {this.errorConstructor('ticket_type', this.props.errors)}
              <select onChange={this.handleChange('ticket_type') } value={this.state.ticket_type === '' ? 'default' : this.state.ticket_type}>
                <option value='default' disabled selected >Select your ticket type</option>
                <option  value='free'>Free Ticket</option>
                <option  value='paid' >Paid Ticket</option>
                <option  value='donation' >Donation</option>
              </select>

              <br/>

              <label>If your ticket is a paid event, how much will it cost?</label>
              {this.errorConstructor('price', this.props.errors)}

            <i className="fa fa-usd" aria-hidden="true"></i><input placeholder='ex. 40.00'
               className='price' name='ticket-type' onChange={this.handleChange('price')} ></input>
          </div>

          <div className='wrapper-additional-settings'>
            <div>
              <span className='icon-3'></span>
              <h2 className='event-form-section-title-3'>Category</h2>
            </div>
            <div className='category-select'>
              {this.errorConstructor('category', this.props.errors)}
              <select  onChange={this.handleChange('category_id')} className='categories'
                      defaultValue={categoryDefault} value={this.state.category_id === null ? 'default' : this.state.category_id}>
                <option value='default' disabled>Select a category</option>
                {options}
              </select>
            </div>

          </div>

          <button className='event-live' onClick={this.handleSubmit}>{buttonText}</button>
          {errorMessage}
          <div className='footer'>
          </div>
        </div>
      </div>
    )
    }
  // }
}


export default EventForm;
