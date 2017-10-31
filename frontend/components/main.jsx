import React from 'react';
import NavContainer from './nav_bar/nav_bar_container';
import EventIndexContainer from './events/event_index_container';
import EventFormContainer from './events/event_form_container';
import EventShowContainer from './events/event_show_container';
import { Route } from 'react-router-dom';
import { LandingTop } from './search/landing_top';
import {Switch} from 'react-router-dom';

const MainPage = () => (
  <div className='MainPage'>
    <div className='header-container'>
      <NavContainer/>
    </div>
    <Switch>
      <Route exact path='/' component={LandingTop} />
      <Route exact path='/events/new' component={EventFormContainer} />
      <Route exact path='/events/:eventId' component={EventShowContainer}/>
      <Route exact path='/events/:eventId/edit' component={EventFormContainer} />
    </Switch>
  </div>
)
export default MainPage;

// <Route exact path='/' component={EventIndexContainer} />
// <Route exact path='/events' component={EventsPageContainer} />

// <Route exact path='/events/:eventId' component={EventShowPage} />



//
// <Route path='/events/:eventId/edit' component={EventFormContainer} />
