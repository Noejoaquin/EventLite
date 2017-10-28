import React from 'react';

export const EventIndexItem = ({event, category}) =>{
  return (
    <li className='event-cell'>

      <img className='event-cell-image' src={event.image_url} />
      <span>{event.ticket_type}</span>
      <div>
        <div className='event-cell-details'>
          <time className='event-cell-time'>{event.start_time}</time>
          <div className='event-cell-name'>{event.name}</div>
          <div className='event-cell-location'>{event.location}</div>
        </div>
        <div className='event-cell-category'>
          <a>{category}</a>
        </div>
          <div className='event-cell-icon'>

          </div>
      </div>
    </li>
  )
}
