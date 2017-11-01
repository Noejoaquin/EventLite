import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.eventId)
  }


  render(){

    if (this.props.event === undefined) {
      return null
    } else {
        let editButton;
        if (this.props.event.organizer_id === this.props.currentUser.id){
          editButton = <Link to={`/events/${this.props.event.id}/edit`}>
                        <div className='edit-button'>
                          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </div></Link>
                    } else {
                      editButton = <div></div>
                    }
        var moment = require('moment');
        let date = moment(this.props.event.start_time).format('MMMM Do');
        let time = moment(this.props.event.start_time).format('hh:mm a');
      let ticketPrice = this.props.event.price === 0 ? 'Free' : '$'.concat(this.props.event.price)
      return (
        <div className='whole-container'>
        <div className='show-container'>
          <div className='show-top'>
            <div style={{backgroundImage: `url(${this.props.event.image_url})`}} className='event-image'></div>
            <div className='event-details-show'>
              <div className='listing-top'>
                <time id='listing-time'>{date}</time>
                <div id='listing-name'>{this.props.event.name}</div>
                <div id='listing-organizer'>{this.props.event.organizer}</div>
                {editButton}
              </div>
              <div className='events-price-show'>{ticketPrice}</div>
            </div>
          </div>

          <div className='listing-panel'>

              <button id='register-button'>Register</button>

              <div className='icon'>
                <div className='fa fa-bookmark-o' aria-hidden='true'></div>
              </div>

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
        <div className='footer'></div>
        </div>
      )

    }

  }
}

export default EventShow;
