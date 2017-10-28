import React from 'react';
import NavContainer from './nav_bar/nav_bar_container';
import EventIndexContainer from './events/event_index_container';
import EventFormContainer from './events/event_form_container';
import { Route } from 'react-router-dom';
// import {SearchCard} from './search/search_card';
import { LandingTop } from './search/landing_top';
const MainPage = () => (
  <div className='MainPage'>
    <div className='header-container'>
      <NavContainer/>
    </div>
    <Route exact path='/' component={LandingTop} />
  </div>
)
export default MainPage;

// <Route exact path='/events' component={EventsPageContainer} />

// <Route exact path='/events/:eventId' component={EventShowPage} />



// <Route exact path='/' component={EventIndexContainer} />
//
// <Route exact path='/events/new' component={EventFormContainer} />
// <Route path='/events/:eventId/edit' component={EventFormContainer} />
