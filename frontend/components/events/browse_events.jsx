import React from 'react';
import EventSearchContainer from './event_search_container';


class BrowseEvents extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <EventSearchContainer/>
      </div>
    )
  }
}

export default BrowseEvents
