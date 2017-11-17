import { combineReducers } from 'redux'
import cookiebar from './cookiebar'
import { reducer as formReducer } from 'redux-form'
import { reducer as notifications } from 'react-notification-system-redux';

const qaTestReducers = combineReducers({
  cookiebar,
  notifications,
  form : formReducer
})

export default qaTestReducers
