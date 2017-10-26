import { RECEIVE_CATEGORIES } from '../actions/category_actions';
import merge from 'lodash/merge';


const CategoriesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CATEGORIES:
      return merge({}, action.categories)
    default:
      return state
  }
}


export default CategoriesReducer;
