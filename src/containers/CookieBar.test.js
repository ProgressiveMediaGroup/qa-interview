/* global it, expect, describe, jest */
import React from 'react'
import { shallow, mount } from 'enzyme'
import { CookieBar } from './CookieBar'

it('renders without crashing', () => {
  shallow(<CookieBar />)
})

it('should match snapshot', () => {
  const wrapper = shallow(<CookieBar />)
  expect(wrapper).toMatchSnapshot()
})

it('should show correctly if accept=false', () => {
  const cookiebar = {accept: false}
  const wrapper = mount(<CookieBar cookiebar={cookiebar} />)
  expect(wrapper.children().length).toBe(1)
})

it('should show correctly if accept=true', () => {
  const cookiebar = {accept: true}
  const wrapper = mount(<CookieBar cookiebar={cookiebar} />)
  expect(wrapper.children().length).toBe(0)
})

describe('Testing text', function () {
  it('should show correctly ', () => {
    const wrapper = mount(<CookieBar />)
    expect(wrapper.find('span').length).toBe(1)
  })

  it('should display correctly ', () => {
    const wrapper = mount(<CookieBar />)
    expect(wrapper.find('span').text()).toBe('This website might use cookies. Please let us know you agree to this:')
  })
})

describe('Testing button', function () {
  it('should show correctly ', () => {
    const wrapper = mount(<CookieBar />)
    expect(wrapper.find('button').length).toBe(1)
  })

  it('should display correctly ', () => {
    const wrapper = mount(<CookieBar />)
    expect(wrapper.find('button').text()).toBe('Accept Cookies')
  })
})

describe('Testing button functionality', function () {
  it('Test no defined onclick', () => {
    const wrapper = mount(
      <CookieBar />
    )
    expect(typeof wrapper.prop('actions').acceptCookies).toBe('function')
  })
  it('Test accepts actions prop', () => {
    const onclickMock = jest.fn()
    const actions = {acceptCookies: onclickMock}
    const wrapper = mount(
      <CookieBar actions={actions} />
    )
    expect(wrapper.prop('actions')).toBe(actions)
  })
  it('Test actions prop mocks correctly', () => {
    const onclickMock = jest.fn()
    const actions = {acceptCookies: onclickMock}
    const wrapper = mount(
      <CookieBar actions={actions} />
    )
    wrapper.prop('actions').acceptCookies()
    expect(onclickMock.mock.calls.length).toBe(1)
  })
  it('Test actions fires mocks correctly', () => {
    const onclickMock = jest.fn()
    const actions = {acceptCookies: onclickMock}
    const wrapper = mount(
      <CookieBar actions={actions} />
    )
    wrapper.find('button').simulate('click')
    expect(onclickMock.mock.calls.length).toBe(1)
  })
})
