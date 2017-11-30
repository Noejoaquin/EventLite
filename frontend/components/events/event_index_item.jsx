import React from 'react';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom';

export const EventIndexItem = ({event, ownProps, removeQuery, profileContainer, receiveQuery, fetchEvents, searchIndex, category, createSave, deleteSave, currentUser}) =>{
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
                      <div className={searchIndex ? "fa fa-bookmark bookmark-search" : "fa fa-bookmark bookmark-regular" } id={searchIndex ? 'icon-bookmark-index-save-search' : 'icon-bookmark-index-save' }
                         aria-hidden='true'></div>
                      </button>
      } else {
        saveButton = saveButton = <button className='save-button' onClick={(e) => {
                      e.preventDefault();
                      createSave(event.id)}}>
                      <div className={searchIndex ? "fa fa-bookmark-o bookmark-search" : "fa fa-bookmark-o bookmark-regular" } id={searchIndex ? 'icon-bookmark-index-search' : 'icon-bookmark-index' }
                         aria-hidden='true'></div>
                      </button>
      }
    } else {
      saveButton = <button className='save-button'><Link to={'/signup'}>
                    <div className={searchIndex ? "fa fa-bookmark-o bookmark-search" : "fa fa-bookmark-o bookmark-regular" } id={searchIndex ? 'icon-bookmark-index-save-search' : 'icon-bookmark-index-save' }
                       aria-hidden='true'></div></Link>
                    </button>
    }


    let indexItem;
     let pushDetails;
    if (profileContainer) {
      pushDetails = () => {
        receiveQuery({name:category})
        ownProps.ownProps.ownProps.history.push('/events') } // this checks to see if we are on the profile page
    } else {
      pushDetails = () => {
        receiveQuery({name:category})
        ownProps.props.history.push('/events') } // this checks to see if we are anywhere besides the profile page
    }
    if (searchIndex){
      indexItem = (
        <li className='event-cell-search'>
          <ul className='search-img-details-list'>

            <li className='image-and-price-search'>
              <Link to={`/events/${event.id}`}>
                <img src={event.image_url} className='event-cell-image-search'>
                </img>
              </Link>
            </li>

            <li className='event-details-container-search'>
              <Link to={`/events/${event.id}`}>
                <div className='event-cell-details-search'>
                <time className='event-cell-time-search'>{date}</time>
                <div className='event-cell-name-search'>{event.name}</div>
                <div className='event-cell-location-search'>{event.location}</div>
                </div>
              </Link>
            </li>

          </ul>
          <div className='bottom-container'>

            <ul className='event-cell-category-search'>
              <li className='event-ticket-type-search'>{price}</li>
              <li onClick={() => {
                fetchEvents({name:category})}
              } className='category-search'>#{category}</li>
              <li className='save-button'>  {saveButton} </li>
            </ul>
              </div>
          </li>
      )
    } else {
      indexItem = (
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
              <div onClick={
                pushDetails
              }
               className='category'>#{category}</div>
            </div>
            {saveButton}
          </div>
        </li>
      )
    }

  return (
    indexItem
  )
}
