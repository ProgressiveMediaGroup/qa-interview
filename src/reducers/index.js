import { combineReducers } from 'redux'
import cookiebar from './cookiebar'
import { reducer as formReducer } from 'redux-form'

const qaTestReducers = combineReducers({
  cookiebar,
  form : formReducer
})

export default qaTestReducers
