import React from 'react'
import wrapper from '../test/wrapper'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Provider } from 'react-redux'
import App from './App'
import RecipesContainer from './recipes/RecipesContainer'

chai.use(chaiEnzyme())

const app = wrapper(<App />)

describe('<App />', () => {
  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains the RecipesContainer', () => {
    expect(app).to.have.descendants(RecipesContainer)
  })
})
