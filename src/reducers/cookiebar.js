// Constant definitions
import { COOKIE_ACCEPT } from '../constants'

// Node_Modules
import objectAssign from 'object-assign'
import cookies from 'js-cookie'

// Initial State for Cookie Bar
const initialState = {
  accept: cookies.get('cookiesAccept') === undefined ? false : cookies.get('cookiesAccept')
}

const cookiebar = (state = initialState, action) => {
  switch (action.type) {
    case COOKIE_ACCEPT:
      cookies.set('cookiesAccept', action.payload.accept);
      return objectAssign({}, state, action.payload)
    default:
      return state
  }
}

export default cookiebar
