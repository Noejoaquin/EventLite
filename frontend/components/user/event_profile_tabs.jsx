import React from 'react';
// import SavedEventsContainer from './saved_events_container';
// import UpcomingEventsContainer from './upcoming_events_container';
// import PastEventsContainer from './past_events_container';
// import ManagedEventsContainer from './managed_events_container';

// const tabNames = ['Upcoming Events','Saved Events', 'Past Events', 'Managed Events']
// const panes = [UpcomingEventsContainer,SavedEventsContainer, PastEventsContainer, ManagedEventsContainer]


class EventProfileTabs extends React.Component{
  constructor(props){
    super(props);
    this.state = { tabsIndex:  0};
  }


  clickHandler(e) {
    debugger
    var idx = e.target.getAttribute("idx");
    idx = parseInt(idx);
    this.setState({tabsIndex: idx});
  }



  render(){
    debugger
    const tabs = this.props.tabNames.map( (name, idx) => {
      if (idx === this.state.tabsIndex) {
        return <div key={idx} className="active tab">
          <h1>{name}</h1>
          <div className='active-border'></div>
        </div>
      } else {
        return <h1 className='non-active tab' key={idx} onClick={this.clickHandler.bind(this)}>{name}</h1>;
      }
    });

    const Component = this.props.panes[this.state.tabsIndex];
    return (
      <div className='event-indicies'>
        <div className='tabs-container'>
          <ul className='tabs'>
            {tabs}
          </ul>
          <div className='content-container'>
            <div className='content'><Component/></div>

          </div>
        </div>

      </div>
    );
  }
}

export default EventProfileTabs;
