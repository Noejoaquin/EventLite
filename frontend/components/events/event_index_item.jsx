import React from 'react';
import { Link } from 'react-router-dom';

export const EventIndexItem = ({event, category}) =>{
  const months = { 1: 'January', 2: 'Feburary', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
      7: 'July', 8:'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}
  let year = event.start_time.split('-')[0]
  let month = months[parseInt(event.start_time.split('-')[1])]
  let day = event.start_time.split('T')[0].split('-')[2]
  let date = month + ' ' + day + ',' + ' ' + year
  return (
  <li className='event-cell'>
      <div className='image-and-price'>
        <Link to={`/events/${event.id}`}><div style={{backgroundImage: `url(${event.image_url})`}} className='event-cell-image'></div></Link>
        <span className='event-ticket-type'>{event.ticket_type}</span>
      </div>
      <div>
        <Link to={`/events/${event.id}`}><div className='event-cell-details'>
          <time className='event-cell-time'>{date}</time>
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
