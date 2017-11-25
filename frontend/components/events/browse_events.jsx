import React from 'react';
import EventSearchContainer from './event_search_container';


class BrowseEvents extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if (this.props.query === null){
      this.props.fetchEvents()
    } else {
      debugger
      this.props.fetchEvents(
        {
          name:this.props.query.searchBar,
          category: this.props.query.searchBar,
          location: this.props.query.location,
          dates: this.props.query.dates
        }
      )
    }
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
