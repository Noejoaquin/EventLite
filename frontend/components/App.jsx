import React from 'react';
import NavContainer from './nav_bar/nav_bar_container';
import { Route, Switch } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';
// import GreetingContainer from './greeting/greeting_container';

// <Route path='/login' component={SessionFormContainer} />
// <Route path='/signup' component={SessionFormContainer} />
// <AuthRoute path='/login' component={SessionFormContainer} />
// <AuthRoute path='/signup' component={SessionFormContainer} />
// <GreetingContainer/>
 const App = () => (
   <main className='app'>
     <h1>eventLite</h1>

     <Switch>
       <AuthRoute path="/login" component={SessionFormContainer} />
       <AuthRoute path="/signup" component={SessionFormContainer} />
       <Route path='/' component={NavContainer} />
      </Switch>

   </main>
 );

 export default App;
