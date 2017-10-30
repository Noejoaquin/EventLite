import React from 'react';
import { Link } from 'react-router-dom';

export const EventIndexItem = ({event, category}) =>{
  return (
  <li className='event-cell'>
      <div className='image-and-price'>
        <Link to={`/events/${event.id}`}><img className='event-cell-image' src={event.image_url}/></Link>
        <span className='event-ticket-type'>{event.ticket_type}</span>
      </div>
      <div>
        <Link to={`/events/${event.id}`}><div className='event-cell-details'>
          <time className='event-cell-time'>{event.start_time}</time>
          <div className='event-cell-name'>{event.name}</div>
          <div className='event-cell-location'>{event.location}</div>
        </div></Link>

        <div className='event-cell-category'>
          <div>
            <Link to={`/events/${category}`}><i className="fa fa-hashtag" aria-hidden='true'></i>
            {category}</Link>
          </div>
        </div>
      </div>
      <div className='event-cell-icon'>
        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
      </div>
    </li>
  )
}
