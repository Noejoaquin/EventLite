import React from 'react';
import { Link } from 'react-router-dom';

export const EventIndexItem = ({event, category, createSave, deleteSave, currentUser}) =>{

  const months = { 1: 'January', 2: 'Feburary', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
      7: 'July', 8:'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}
  let year = event.start_time.split('-')[0]
  let month = months[parseInt(event.start_time.split('-')[1])]
  let day = event.start_time.split('T')[0].split('-')[2]
  let date = month + ' ' + day + ',' + ' ' + year
  let price = event.ticket_type === 'free' || event.price < 1 ? 'FREE' : '$' + event.price;

    var saveButton;
    if (currentUser){
      if (currentUser.saved_events.includes(event.id)) {
        saveButton = <button className='save-button' onClick={(e) => {
                      e.preventDefault();
                      deleteSave(event.id)}}>
                      <div className="fa fa-bookmark" id='icon-bookmark-index-save'
                         aria-hidden='true'></div>
                      </button>
      } else {
        saveButton = saveButton = <button className='save-button' onClick={(e) => {
                      e.preventDefault();
                      createSave(event.id)}}>
                      <div className="fa fa-bookmark-o" id='icon-bookmark-index'
                         aria-hidden='true'></div>
                      </button>
      }
    } else {
      saveButton = <button className='save-button'><Link to={'/signup'}>
                    <div className="fa fa-bookmark-o" id='icon-bookmark-index-save'
                       aria-hidden='true'></div></Link>
                    </button>
    }

  return (
  <li className='event-cell'>
      <div className='image-and-price'>
        <Link to={`/events/${event.id}`}><div style={{backgroundImage: `url(${event.image_url})`}} className='event-cell-image'></div></Link>
        <span className='event-ticket-type'>{price}</span>
      </div>
      <div>
        <Link to={`/events/${event.id}`}><div className='event-cell-details'>
          <time className='event-cell-time'>{date}</time>
          <div className='event-cell-name'>{event.name}</div>
          <div className='event-cell-location'>{event.location}</div>
        </div></Link>

        <div className='event-cell-category'>
          <div className='category'>#{category}</div>
        </div>
        {saveButton}
      </div>
    </li>
  )
}

// <i className="fa fa-hashtag" aria-hidden='true'></i>

// <button>
//   <div className='fa fa-bookmark-o' id='icon-bookmark-index' aria-hidden='true'></div>
// </button>

// class EventIndexItem extends React.Component {
//   constructor({event, category, currentUser, deleteSave, createSave}) {
//     super();
//     this.handleSave = this.handleSave.bind(this);
//     this.handleUnsave = this.handleUnsave.bind(this);
//   }
//
//   handleSave(){
//     this.props.createSave(event.id)
//   }
//
//   handleUnsave(){
//     this.props.deleteSave(event.id)
//   }
//
//   render () {
//     const months = { 1: 'January', 2: 'Feburary', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
//       7: 'July', 8:'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'}
//
//       let year = event.start_time.split('-')[0]
//       let month = months[parseInt(event.start_time.split('-')[1])]
//       let day = event.start_time.split('T')[0].split('-')[2]
//       let date = month + ' ' + day + ',' + ' ' + year
//       let price = event.ticket_type === 'free' || event.price < 1 ? 'FREE' : '$' + event.price;
//
//       if (currentUser.saved_events.includes(event.id)) {
//         saveButton = <button className='save-button' onClick={this.handleUnsave}>
//           <div className="fa fa-bookmark" id='icon-bookmark-index-save' aria-hidden='true'></div>
//         </button>
//       } else {
//         saveButton = <button onClick={this.handleSave}>
//           <div className='fa fa-bookmark-o' id='icon-bookmark-index' aria-hidden='true'></div>
//         </button>
//       }
//       return (
//         <li className='event-cell'>
//           <div className='image-and-price'>
//             <Link to={`/events/${event.id}`}><div style={{backgroundImage: `url(${event.image_url})`}} className='event-cell-image'></div></Link>
//             <span className='event-ticket-type'>{price}</span>
//           </div>
//           <div>
//             <Link to={`/events/${event.id}`}><div className='event-cell-details'>
//               <time className='event-cell-time'>{date}</time>
//               <div className='event-cell-name'>{event.name}</div>
//               <div className='event-cell-location'>{event.location}</div>
//             </div></Link>
//
//             <div className='event-cell-category'>
//               <div>
//                 <Link to={`/events/${category}`}><i className="fa fa-hashtag" aria-hidden='true'></i>
//                 {category}</Link>
//             </div>
//           </div>
//         </div>
//         { saveButton }
//       </li>
//     )
//
//   }
// }
//
// export default EventIndexItem;
