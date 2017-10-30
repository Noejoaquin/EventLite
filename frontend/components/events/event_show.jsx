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
      let ticketPrice = this.props.event.price === 0 ? 'Free' : '$'.concat(this.props.event.price)
      return (
        <div className='whole-container'>
        <div className='show-container'>
          <div className='show-top'>
            <img className='event-image' src={this.props.event.image_url}></img>
            <div className='event-details-show'>
              <div className='listing-top'>
                <time id='listing-time'>{this.props.event.start_time}</time>
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
                    <li>{this.props.event.start_time}</li>
                    <li>{this.props.event.start_time}</li>
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
