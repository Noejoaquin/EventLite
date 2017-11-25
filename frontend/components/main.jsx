import React from 'react';
import NavContainer from './nav_bar/nav_bar_container';
import EventIndexContainer from './events/event_index_container';
import EventFormContainer from './events/event_form_container';
import EventShowContainer from './events/event_show_container';
import BrowseEventsContainer from './events/event_browse_container';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import { LandingTop } from './search/landing_top';
import ProfileContainer from './user/profile_container';
import {Switch} from 'react-router-dom';


const MainPage = () => (
  <div className='MainPage'>
    <div className='header-container'>
      <Route  path='/' component={NavContainer} />
    </div>
    <Switch>
      <Route exact path='/' component={LandingTop} />
      <ProtectedRoute exact path='/events/new' component={EventFormContainer}/>
      <Route exact path ='/events' component={BrowseEventsContainer} />
      <Route exact path='/events/:eventId' component={EventShowContainer}/>
      <ProtectedRoute exact path='/users/:userId' component={ProfileContainer} />
      <ProtectedRoute exact path='/events/:eventId/edit' component={EventFormContainer} />
    </Switch>
  </div>
)
export default MainPage;
