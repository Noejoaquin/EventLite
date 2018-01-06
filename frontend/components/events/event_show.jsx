import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props);
    this.handleAttendance = this.handleAttendance.bind(this);
    this.handleCancellation = this.handleCancellation.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
    this.state = this.props.currentUser
  }

  componentWillMount(){
    this.props.fetchEvent(this.props.match.params.eventId).then(() => this.props.fetchUsers())
  }

  handleAttendance(){
    this.props.createAttendance(this.props.match.params.eventId)
  }

  handleCancellation() {
    this.props.deleteAttendance(this.props.match.params.eventId)
  }

  handleSave(){
    this.props.createSave(this.props.match.params.eventId)
  }

  handleUnsave(){
    this.props.deleteSave(this.props.match.params.eventId)
  }


  render(){

    if (this.props.event === undefined) {
      return null
    } else {
        var editButton;
        // if (this.props.currentUser){
        //   if (this.props.event.organizer_id === this.props.currentUser.id){
            editButton = <Link to={`/events/${this.props.event.id}/edit`}>
              <div className='edit-button'>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </div></Link>
            // } else {
            //   editButton = <div></div>
            // }
        // }
        var attendanceButton;
        if (this.props.currentUser){
          if (this.props.currentUser.attending_events.includes(parseInt(this.props.match.params.eventId))) {
            attendanceButton = <button onClick={this.handleCancellation} id='cancellation-button'>Cancel Registration</button>
          } else {
            attendanceButton = <button onClick={this.handleAttendance} id='register-button'>Register</button>
          }
        } else {
          attendanceButton = <button id='register-button'><Link to={'/signup'}><div>Register</div></Link></button>
        }
        var saveButton;
        if (this.props.currentUser){
          if (this.props.currentUser.saved_events.includes(parseInt(this.props.match.params.eventId))) {
            saveButton = <button className='save-button' onClick={this.handleUnsave}><div>
              <div className="fa fa-bookmark" id='icon-bookmark-show-save' aria-hidden='true'></div>
            </div></button>
          } else {
            saveButton = <button onClick={this.handleSave}><div>
              <div className='fa fa-bookmark-o' id='icon-bookmark-show' aria-hidden='true'></div>
            </div></button>
          }
        } else {
          saveButton = <button><Link to={'/signup'}><div>
            <div className='fa fa-bookmark-o' id='icon-bookmark-show' aria-hidden='true'></div>
          </div></Link></button>
        }
        var moment = require('moment');
        let date = moment(this.props.event.start_time).format('MMMM Do');
        let time = moment(this.props.event.start_time).format('hh:mm a');
      let ticketPrice = this.props.event.price === 0 ? 'Free' : '$'.concat(this.props.event.price)

      return (
        <div className='whole-container-show'>
        <div className='show-container'>
          <div className='show-top'>
            <div style={{backgroundImage: `url(${this.props.event.image_url})`}} className='event-image'></div>
            <div className='event-details-show'>
              <div className='listing-top'>
                <time id='listing-time'>{date}</time>
                <div id='listing-name'>{this.props.event.name}</div>
                <div id='listing-organizer'>
                  {this.props.event.organizer}</div>
                {editButton}
              </div>
              <div className='events-price-show'>{ticketPrice}</div>
            </div>
          </div>

          <div className='listing-panel'>

              {attendanceButton}

              {saveButton}

          </div>

            <div className='listing-cell'>
              <div className='description'>
                <h3 className='title description-title'>description</h3>
                <div className='description-contents' dangerouslySetInnerHTML={{__html: this.props.event.description}}>
              </div>
            </div>
              <div className='event-details'>
                <div className='date-and-time'>
                  <h3 className='title date-and-time'>date and time</h3>
                  <ul>
                    <li>{date}</li>
                    <li>{time}</li>
                  </ul>
                </div>
                <div className='location'>
                  <h3 className='title location'>location</h3>
                  {this.props.event.location}
                </div>
              </div>
            </div>
         </div>
       </div>
      )

    }

  }
}

export default EventShow;
