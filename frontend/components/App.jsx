import React from 'react';
import NavContainer from './nav_bar/nav_bar_container';
import { Route } from 'react-router';
import SessionForm from './session/session_form_container';
// import GreetingContainer from './greeting/greeting_container';

// import { AuthRoute } from '../util/route_util';
// <Route path='/login' component={SessionFormContainer} />
// <Route path='/signup' component={SessionFormContainer} />
// <AuthRoute path='/login' component={SessionFormContainer} />
// <AuthRoute path='/signup' component={SessionFormContainer} />
// <GreetingContainer/>
 const App = () => (
   <div>
     <h1>eventLite</h1>
     <NavContainer/>

      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
   </div>
 );

 export default App;
