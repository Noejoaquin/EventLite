import React from 'react';
import SearchCard  from './search_card';
import EventIndexContainer from '../events/event_index_container';
import SearchBarContainer from './search_bar_container';

class LandingTop extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className='root-page'>
      <img className='LandingImage'></img>
          <div className='meta-search-card'>
            <h1>Find your next Experience</h1>
              <SearchBarContainer props={this.props}/>
          </div>
        <EventIndexContainer props={this.props}/>
      </div>
    )
  }
}

export default LandingTop
