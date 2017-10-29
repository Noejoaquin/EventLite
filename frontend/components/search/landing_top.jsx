import React from 'react';
import { SearchCard } from './search_card';
import EventIndexContainer from '../events/event_index_container';
export const LandingTop = () => {
  return (
    <div className='root-page'>
    <img className='LandingImage'></img>
      <SearchCard />
      <EventIndexContainer/>
    </div>
  )
}
