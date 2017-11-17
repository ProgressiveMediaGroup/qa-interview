/* global it, describe, expect */
import reducer from './cookiebar'
import * as types from '../constants'

describe('cookiebar reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ accept: false })
  })

  it('should handle COOKIE_ACCEPT', () => {
    expect(
      reducer([], {
        type: types.COOKIE_ACCEPT,
        payload: { accept: true }
      })
    ).toEqual({ accept: true })
  })
})
