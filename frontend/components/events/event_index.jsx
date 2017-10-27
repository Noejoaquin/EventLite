import React from 'react';
import {EventIndexItem} from './event_index_item';
import { isEmpty } from 'lodash';

class EventIndex extends React.Component {
  constructor(props){
    super(props);
    // this.findCategoryName = this.findCategoryName.bind(this)
  }

  componentDidMount(){
    this.props.fetchEvents().then(this.props.fetchCategories())
  }

  findCategoryName(event, categories){

    let categoryId = event.category_id;
    let name = this.props.categories[categoryId].name
    return name
  }

  render(){
    let events;
    if (!(isEmpty(this.props.categories))) {
      events = this.props.events.map((event) => {
      let category = this.findCategoryName(event, this.props.categories)
      return <EventIndexItem key={event.id} event={event} category={ category } />
      })
    }
    return (
      <div>
        <ul>
          {events}
        </ul>
      </div>
    )
  }
}


export default EventIndex;
