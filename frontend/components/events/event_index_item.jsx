import React from 'react';

export const EventIndexItem = ({event, category}) =>{
  return (
    <li>
      <ul>
        <li>{event.start_time}</li>
        <li>{event.name}</li>
        <li>{event.location}</li>
        <li>{category}</li>
      </ul>
    </li>
  )
}
