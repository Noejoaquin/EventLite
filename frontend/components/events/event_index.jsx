import React from 'react';
import {EventIndexItem} from './event_index_item';
import { isEmpty } from 'lodash';
// category: this.props.query.searchBar,
// location: this.props.query.location,
// dates: this.props.query.dates

class EventIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    debugger
    this.props.fetchEvents(
      {
        name:this.props.query.name,
      }
    ).then(this.props.fetchCategories())
    this.props.removeQuery()
  }

  componentWillReceiveProps(newProps){
    debugger
    // this.props.query.name = newProps.query.name
    // debugger
    // if (this.props.query.name === '' && this.props.query.name !== newProps.query.name ){
    //   this.props.fetchEvents(
    //     {
    //      name: '',
    //     }
    //   ).then(this.props.fetchCategories())
    // }
    // // this.props.removeQuery()
    //
    // if (this.props.query.name !== newProps.query.name){
    //    this.props.fetchEvents(
    //      {
    //       name: this.props.query.name,
    //      }
    //    ).then(this.props.fetchCategories())
    //      // this.props.removeQuery()
    //  }
  }

  findCategoryName(event, categories){
    let categoryId = event.category_id;
    let cat = this.props.categories[categoryId].name
    return cat
  }

  render(){
    let events;
    if (!(isEmpty(this.props.categories))) {
      events = this.props.events.map((event) => {
      let category = this.findCategoryName(event, this.props.categories)
      return <EventIndexItem key={event.id} event={event} category={ category }
                deleteSave={this.props.deleteSave} createSave={this.props.createSave}
                currentUser={this.props.currentUser}/>
      })
    }
    return (
      <div className='event-meta-container'>
        <div className='event-index-container'>
          <ul className='event-list'>
            {events}
          </ul>
        </div>
      </div>
    )
  }
}


export default EventIndex;
