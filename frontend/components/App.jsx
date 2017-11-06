import React from 'react';
import MainPage from './main';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';

 const App = () => (
   <main className='app'>

     <Switch>
       <AuthRoute path="/login" component={SessionFormContainer} />
       <AuthRoute path="/signup" component={SessionFormContainer} />
       <MainPage/>
      </Switch>

   </main>
 );

 export default App;
