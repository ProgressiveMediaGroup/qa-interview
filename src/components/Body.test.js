/* global it, describe, expect */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Body from './Body'

it('renders without crashing', () => {
  shallow(<Body />)
})

it('should match snapshot', () => {
  const wrapper = shallow(<Body />)
  expect(wrapper).toMatchSnapshot()
})

describe('Testing heading', function () {
  const testHeading = 'test heading'

  // Test no defined title
  it('Test no defined heading', () => {
    const wrapper = mount(
      <Body />
    )
    expect(wrapper.prop('heading')).toBe('')
  })

  // Test title displays argument
  it('Test heading accepts argument', () => {
    const wrapper = mount(
      <Body heading={testHeading} />
    )
    expect(wrapper.prop('heading')).toBe(testHeading)
  })

  // Test title displays argument
  it('Test title displays argument', () => {
    const wrapper = mount(
      <Body heading={testHeading} />
    )
    expect(wrapper.find('h1').text()).toBe(testHeading)
  })
})

describe('Testing subheading', function () {
  const testSubHeading = 'test sub heading'

  // Test no defined title
  it('Test no defined heading', () => {
    const wrapper = mount(
      <Body />
    )
    expect(wrapper.prop('subheading')).toBe('')
  })

  // Test title displays argument
  it('Test heading accepts argument', () => {
    const wrapper = mount(
      <Body subheading={testSubHeading} />
    )
    expect(wrapper.prop('subheading')).toBe(testSubHeading)
  })

  // Test title displays argument
  it('Test title displays argument', () => {
    const wrapper = mount(
      <Body subheading={testSubHeading} />
    )
    expect(wrapper.find('h2').text()).toBe(testSubHeading)
  })
})

// Test Children are displayed (icon + text)
describe('Testing children', function () {
  it('Test rendering children correctly', () => {
    const wrapper = mount(
      <Body>Hello World</Body>
    )
    expect(wrapper.find('.body-container').text()).toBe('Hello World')
  })
})
