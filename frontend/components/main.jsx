import React from 'react';
import NavContainer from './nav_bar/nav_bar_container';
import EventIndexContainer from './events/event_index_container';
import EventFormContainer from './events/event_form_container';
import EventShowContainer from './events/event_show_container';
import BrowseEventsContainer from './events/event_browse_container';
import EventSearchContainer from './events/event_search_container';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import LandingContainer from './search/landing_container';
import ProfileContainer from './user/profile_container';
import FooterContainer from './footer/footer_container'
import {Switch} from 'react-router-dom';

const MainPage = () => (
  <div className='MainPage'>
    <div className='header-container'>
      <Route  path='/' component={NavContainer}/>
    </div>
    <Switch>
      <ProtectedRoute exact path='/events/new' component={EventFormContainer}/>
      <Route exact path='/' component={LandingContainer}/>
      <Route exact path='/events/:eventId' component={EventShowContainer}/>
      <Route exact path ='/events' component={EventSearchContainer}/>
      <ProtectedRoute exact path='/users/:userId' component={ProfileContainer}/>
      <ProtectedRoute exact path='/events/:eventId/edit' component={EventFormContainer}/>
    </Switch>
      <Route path='/' component={FooterContainer} />
  </div>
)
export default MainPage;
