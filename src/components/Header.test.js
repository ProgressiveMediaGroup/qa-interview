/* global it, describe, expect */
import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter, Link } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'

it('renders without crashing', () => {
  shallow(<Header />)
})

it('should match snapshot', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
})

describe('Has correct root block structure', function () {
  it('header tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('header').length).toBe(1)
  })
  it('top tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('header').find('div.top').length).toBe(1)
  })
  it('menu tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('header').find('div.menu').length).toBe(1)
  })
  it('breadcrumbs tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('header').find('div.breadcrumbs').length).toBe(1)
  })
})

describe('Has correct top block structure', function () {
  it('container tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.top').find('div.container').length).toBe(1)
  })
  it('link is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.top').find('div.container').children().at(0).type()).toBe(Link)
  })
  it('link goes to root', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.top').find('div.container').children().at(0).props().to).toBe('/')
  })
  it('Image is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.top').children().at(0).find('img').length).toBe(1)
  })
  it('Image is correct', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.top').children().at(0).find('img').props().src).toBe('pt-logo.png')
  })
  it('Image alt is correct', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.top').children().at(0).find('img').props().alt).toBe('Progressive Tech')
  })
  it('Image class is correct', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.top').children().at(0).find('img').hasClass('logo-img')).toBe(true)
  })
})

describe('Has correct menu block structure', function () {
  it('container tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.menu').find('div.container').length).toBe(1)
  })
  it('Only one link is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.menu').find('div.container').children().length).toBe(1)
  })
  it('Navigation is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.menu').find('div.container').children().at(0).type()).toBe(Navigation)
  })
})

describe('Has correct breadcrumb block structure', function () {
  it('container tag is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.breadcrumbs').find('div.container').length).toBe(1)
  })
  it('Only one link is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.breadcrumbs').find('div.container').children().length).toBe(1)
  })
  it('link is displayed', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.breadcrumbs').find('div.container').children().at(0).type()).toBe(Link)
  })
  it('link goes to root', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.breadcrumbs').find('div.container').children().at(0).props().to).toBe('/')
  })
  it('link text is correct', () => {
    const wrapper = mount(<MemoryRouter>
      <Header />
    </MemoryRouter>)
    expect(wrapper.find('div.breadcrumbs').find('div.container').children().at(0).text()).toBe('/ Home /')
  })
})
