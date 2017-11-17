/* global it, describe, expect */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Navigation from './Navigation'
import { MemoryRouter, Link } from 'react-router-dom'

it('renders without crashing', () => {
  shallow(<Navigation />)
})

it('should match snapshot', () => {
  const wrapper = shallow(<Navigation />)
  expect(wrapper).toMatchSnapshot()
})

describe('Has correct block structure', function () {
  it('ul tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Navigation />
    </MemoryRouter>)
    expect(wrapper.find('ul').length).toBe(1)
  })
  it('one li underneath ul tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Navigation />
    </MemoryRouter>)
    expect(wrapper.find('ul').find('li').length).toBe(1)
  })
  it('one item underneath li tag', () => {
    const wrapper = mount(<MemoryRouter>
      <Navigation />
    </MemoryRouter>)
    expect(wrapper.find('ul').find('li').at(0).children().length).toBe(1)
  })
  it('link underneath li tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Navigation />
    </MemoryRouter>)
    expect(wrapper.find('ul').find('li').at(0).children().at(0).type()).toBe(Link)
  })
  it('link goes to root', () => {
    const wrapper = mount(<MemoryRouter>
      <Navigation />
    </MemoryRouter>)
    expect(wrapper.find('ul').find('li').at(0).children().at(0).props().to).toBe('/')
  })
  it('link goes to root', () => {
    const wrapper = mount(<MemoryRouter>
      <Navigation />
    </MemoryRouter>)
    expect(wrapper.find('ul').find('li').at(0).children().at(0).text()).toBe('Home')
  })
})
