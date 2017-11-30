import React from 'react';
import EventSearchContainer from './event_search_container';


class BrowseEvents extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className='browse-events-header-container'>
          <div>
            <h3 className='browse-events-header'>Things to do</h3>
              <div className='browse-events-text'>
                There are so many things to explore and do. Go square dancing on Pilgrim avenue. See American Jim live.
                Get active and plant things at the Blackburn Community Garden. Get your costumed-groove on at the Alexis Charity Ball!
              </div>
          </div>
        </div>
        <EventSearchContainer ownProps={this.props.ownProps}/>
      </div>
    )
  }
}

export default BrowseEvents
