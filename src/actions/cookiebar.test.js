/* global it, describe, expect */
import * as actions from './cookiebar'
import * as types from '../constants'

describe('actions', () => {
  it('should create an action to add a COOKIE_ACCEPT', () => {
    const expectedAction = {
      type: types.COOKIE_ACCEPT,
      payload: {
        accept: true
      }
    }
    expect(actions.acceptCookies()).toEqual(expectedAction)
  })
})
