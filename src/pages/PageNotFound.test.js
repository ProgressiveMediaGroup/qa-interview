/* global it, expect, describe */
import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import PageNotFound from './PageNotFound'

it('renders without crashing', () => {
  shallow(
    <PageNotFound />
  )
})

it('should match snapshot', () => {
  const wrapper = shallow(
    <PageNotFound />
  )
  expect(wrapper).toMatchSnapshot()
})

describe('Testing Strapline', function () {
  it('H1 Title is displayed', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('H1 Title is correct', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )
    expect(wrapper.find('h1').text()).toBe('404')
  })

  it('H2 Title is displayed', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )
    expect(wrapper.find('h2').length).toBe(1)
  })

  it('H2 Title is correct', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )
    expect(wrapper.find('h2').text()).toBe('Page not found')
  })
})

describe('Testing Content', function () {
  it('P tag is displayed', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )
    expect(wrapper.find('p').length).toBe(1)
  })

  it('P tag is correct', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )
    expect(wrapper.find('p').text()).toBe('Sorry, but the page you were looking for has not been found.')
  })
})
