/* global it, describe, expect */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Footer from './Footer'

it('renders without crashing', () => {
  shallow(<Footer />)
})

it('should match snapshot', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper).toMatchSnapshot()
})

describe('Has correct block structure', function () {
  it('footer tag is displayed', () => {
    const wrapper = mount(<Footer />)
    expect(wrapper.find('footer').length).toBe(1)
  })
  it('container tag is displayed', () => {
    const wrapper = mount(<Footer />)
    expect(wrapper.find('footer').find('div.container').length).toBe(1)
  })
  it('container tag contains correct text', () => {
    const wrapper = mount(<Footer />)
    expect(wrapper.find('footer').find('div.container').text()).toBe('© 2017 Progressive Content. All rights reserved.')
  })
})
