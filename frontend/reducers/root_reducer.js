import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import QueryReducer from './query_reducer';
const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer,
  query: QueryReducer,
});

export default RootReducer;
