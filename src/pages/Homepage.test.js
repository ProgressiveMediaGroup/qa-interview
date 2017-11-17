/* global it, expect, describe */
import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Homepage from './Homepage'

it('renders without crashing', () => {
  shallow(<Homepage />)
})

it('should match snapshot', () => {
  const wrapper = shallow(<Homepage />)
  expect(wrapper).toMatchSnapshot()
})

describe('Testing Strapline', function () {
  it('H1 Title is displayed', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('H1 Title is correct', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
    expect(wrapper.find('h1').text()).toBe('Progressive Content')
  })

  it('H2 Title is displayed', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
    expect(wrapper.find('h2').length).toBe(1)
  })

  it('H2 Title is correct', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
    expect(wrapper.find('h2').text()).toBe('Front-end Technical Test')
  })
})

describe('Testing Content', function () {
  it('P tag is displayed', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
    expect(wrapper.find('p').length).toBe(2)
  })

  it('First P tag is correct', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
    expect(wrapper.find('p').at(0).text()).toBe('This project is used as a technical test when interviewing potential front-end web developers for Progressive Content.')
  })

  it('Second P tag is correct', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
    expect(wrapper.find('p').at(1).text()).toBe('For more information, check out the README file...')
  })
})
