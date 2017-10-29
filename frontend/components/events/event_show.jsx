import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props);
    debugger
  }

  componentDidMount(){
    debugger
    this.props.fetchEvent(this.props.match.params.eventId)
  }


  render(){
    if (this.props.event === undefined) {
      return null
    } else {
      return (
        <div>
          <div className='show-top'>
            <img className='event-image'></img>
            <div className='event-details-show'>
              <div className='listing-top'>
                <time>{this.props.event.start_time}</time>
                <div>{this.props.event.name}</div>
              </div>
              <div className='events-price-show'></div>
            </div>
          </div>

          <div className='listing-panel'>
            <div>
              <i className='fa fa-bookmark-o' aria-hidden='true'></i>
            </div>
            <div>
              <button>Register</button>
            </div>
          </div>

          <div className='listing-info'>
            <div className='listing-cell'>
              <div className='description'>
                {this.props.event.description}
              </div>
              <div className='event-details'>
                <div className='date-and-time'>
                  <h3>DATE AND TIME</h3>
                  <ul>
                    <li>{this.props.event.start_time}</li>
                    <li>{this.props.event.start_time}</li>
                  </ul>
                </div>
                <div className='location'>
                  <h3>LOCATION</h3>
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
