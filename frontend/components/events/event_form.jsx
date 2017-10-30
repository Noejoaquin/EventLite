import React from 'react';
import  DatePicker  from 'react-datepicker';
import {Link} from 'react-router-dom';
// import InputMoment from 'input-moment';
import DateTime from 'react-datetime';
import ReactQuill from 'react-quill';
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
    this.handleFile = this.handleFile.bind(this)
    this.handleDescription = this.handleDescription.bind(this)
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
    let formData = new FormData();
    formData.append("event[name]", this.state.name)
    formData.append("event[description]", this.state.description)
    formData.append("event[location]", this.state.location)
    formData.append("event[ticket_type]", this.state.ticket_type)
    formData.append("event[price]", this.state.price)
    formData.append("event[start_time]", this.state.start_time)
    formData.append("event[end_time]", this.state.end_time)
    formData.append("event[category_id]", this.state.category_id)
    formData.append("event[image]", this.state.imageFile)
    this.props.action(formData)
  }

  handleDescription(description){
    this.setState( { description  })
  }

  handleChange(field){
    return (e) => {
      debugger
      this.setState( { [field]:e.target.value } )
    }
  }

  handleFile(e){
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
        <h1>{title}</h1>
        <div className='wrapper-event-details'>
          <span className='icon-1'></span>
          <h2 className='event-form-section-title-1'></h2>
          <div className='event-details-title'>
            <label>Event Name</label>
            <input type='text' onChange={this.handleChange('name')} value={this.state.name}></input>
          </div>
          <label>Location</label>
          <input type='text' onChange={this.handleChange('location')} value={this.state.location}></input>
          <div className='times'>
            <div className='time-start'>
              <ul className='time-list-inputs-start'>
                <label className='date-start'>Starts</label>
                <li>
                  <DateTime onChange={this.handleDate('start_time')} value={this.state.start_time} />

                </li>
              </ul>
            </div>
            <div className='time-end'>
              <ul className='time-list-inputs-end'>
                <label className='date-end'>End</label>
                <li>
                  <DateTime onChange={this.handleDate('end_time')} value={this.state.end_time}/>
                </li>
              </ul>
            </div>
          </div>
          <div className='Event-image-title-cell'>
            <h3 className='event-image-title'>Event Image</h3>
            <input type='file' onChange={this.handleFile}></input>
            <img src={this.state.imageUrl}/>
          </div>

          <div className='event-details-description'></div>
          <div className='event-description-title-cell'>
            <h3 className='event-description-title'>Event Description</h3>
          </div>

          <div className='event-description'>
            <ReactQuill
                  onChange={this.handleDescription} value={this.state.description}/>
              <textarea value={this.state.description} onChange={this.handleChange('description')}></textarea>
          </div>

          <div className='wrapper-ticket'>
            <div className='wrapper-ticket-header'>
              <span className='icon-2'></span>
              <h2 className='event-form-section-title-2'>Create Tickets</h2>
            </div>

              <select onChange={this.handleChange('ticket_type')}>
                <option disabled selected >Select your ticket type</option>
                <option  value='free'>Free Ticket</option>
                <option  value='paid' >Paid Ticket</option>
                <option  value='donation' >Donation</option>
              </select>
              <label>If your ticket is paid, how much will it cost?</label>
            <input className='price' name='ticket-type' onChange={this.handleChange('price')} value={this.props.price}></input>
          </div>

          <div className='wrapper-additional-settings'>
            <div>
              <span className='icon-3'></span>
              <h2 className='event-form-section-title-3'></h2>
            </div>
            <div className='category-select'>
              <select defaultValue='Select a Category' onChange={this.handleChange('category_id')} className='categories'>
                <option disabled selected>Select a category</option>
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
