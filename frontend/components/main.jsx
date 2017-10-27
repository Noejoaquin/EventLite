import React from 'react';
import NavContainer from './nav_bar/nav_bar_container';
import EventIndexContainer from './events/event_index_container';
import EventFormContainer from './events/event_form_container';
import  {Route}  from 'react-router-dom';

const MainPage = () => (
  <div>
  <NavContainer/>

  <Route path='/' component={EventIndexContainer} />
  <Route path='/events/new' component={EventFormContainer} />
  <Route path='/events/:eventId/edit' component={EventFormContainer} />
  </div>
)
export default MainPage;

// <Route exact path='/events' component={EventsPageContainer} />

// <Route exact path='/events/:eventId' component={EventShowPage} />
