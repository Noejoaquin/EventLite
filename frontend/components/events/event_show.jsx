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
      const months = { 1: 'January', 2: 'Feburary', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
        7: 'July', 8:'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}
        let monthNum = parseInt(this.props.event.start_time.split('-')[1]);
        let month = months[monthNum];
        let day = this.props.event.start_time.split('T')[0].split('-')[2]
        let hours = this.props.event.start_time.split('T')[1].split(':')[0]
        hours = hours > 12 ? hours - 12 : hours;
        let amOrPm = hours > 11 ? 'PM' : 'AM'
        let minutes = this.props.event.start_time.split('T')[1].split(':')[1];
        let date = month + ' ' + day
        let time = hours + ':' + minutes + ' ' + amOrPm
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
                <div id='listing-organizer'>Julie Andrews</div>
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
                <h3 className='title description-header'>description</h3>
                {this.props.event.description}
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
