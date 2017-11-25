import React from 'react';
import SearchCard  from './search_card';
import EventIndexContainer from '../events/event_index_container';

class LandingTop extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='root-page'>
      <img className='LandingImage'></img>
        <SearchCard props={this.props}/>
        <EventIndexContainer/>
      </div>
    )
  }
}

export default LandingTop
