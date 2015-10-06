import React from 'react'
import assert from 'assert'
import { renderComponent } from 'react-test-unit'
import Number from '../src/Number'

describe('Component', () => {
  const number = renderComponent(<Number />)

  it('should render', () => {
    assert.equal('input', number.type)
  })
})
