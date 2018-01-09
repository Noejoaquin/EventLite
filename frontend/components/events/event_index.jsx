import React from 'react';
import {EventIndexItem} from './event_index_item';
import { isEmpty } from 'lodash';
import EventMap from '../map/event_map'


class EventIndex extends React.Component {
  constructor(props){
    super(props);
    this.alreadyOnSearchPage = false;
    this.state = this.props.query
  }
  componentDidMount(){
    if ( this.props.ownProps && this.props.searchIndex === false) { // this checks for the profile indicies, making sure all events are in state
      this.props.fetchEvents(
        {
          name: '',
        }
      ).then(this.props.fetchCategories())
      return
    }
    if (this.props.query.name === '' && this.props.searchIndex === false){
      this.props.fetchEvents(
        {
          name: '',
        }
      ).then(this.props.fetchCategories())
    } else if (this.props.searchIndex){

      this.props.fetchEvents(
        {
          name: this.props.query.name,
        }
      ).then(this.props.fetchCategories())
    }
  }

  componentWillReceiveProps(newProps){

    if (this.props.searchIndex && this.props.query.name !== newProps.query.name) {
      this.props.fetchEvents({
        name: newProps.query.name
      }).then(this.props.fetchCategories())
    }
  }

  componentWillUnmount(){
    if(this.props.searchIndex){
      this.props.removeQuery()
    }
  }

  findCategoryName(event, categories){
    let categoryId = event.category_id;
    let cat = this.props.categories[categoryId].name
    return cat
  }

  render(){
    let events;
    let eventIndex;
    let filterableEvents = [];
    let finalEvents = [];
    let emptyIndexPicture;
    if (!(isEmpty(this.props.categories)) && !(isEmpty(this.props.events))) {
      filterableEvents = this.props.events
      events = this.props.events.map((event) => {
        let category = this.findCategoryName(event, this.props.categories)

        return <EventIndexItem key={event.id} event={event} category={ category }
                  deleteSave={this.props.deleteSave} createSave={this.props.createSave}
                  currentUser={this.props.currentUser} searchIndex={this.props.searchIndex}
                  fetchEvents={this.props.fetchEvents} ownProps={this.props} receiveQuery={this.props.receiveQuery}
                  profileContainer={this.props.profileContainer} removeQuery={this.props.removeQuery}/>
      })

      for (let i = 0; i <= 20; i++){
        finalEvents.push(events[i])
      }
    }

    if (finalEvents[0] === undefined){
      finalEvents = (
        <div>
          <img className='empty-index-image' src={window.empty_index_image} />
          <h2 className='empty-notice'>You Don't Have Any Events Here Yet.</h2>
          <br/>
          <h2 className='empty-notice'>But Visit Our Browse Events Page and Get Busy!</h2>
        </div>
      )
    }
    if (this.props.searchIndex){
      eventIndex = (
        <div className='event-meta-container-search'>
          <EventMap events={filterableEvents} lat={40.713647} lng={-73.942451}/>
          <div className='event-index-container-search'>
            <ul className='event-list-search'>
              {finalEvents}
            </ul>
          </div>
        </div>
      )
    } else {
      eventIndex = (<div className='event-meta-container'>
        <div className='event-index-container'>
            <ul className='event-list'>
              {finalEvents}
            </ul>
          </div>
      </div>
      )
    }
    return (
      eventIndex
    )
  }
}


export default EventIndex;
