import React, { Component } from 'react'

function isNumber(value) {
  return typeof value === 'number' && isFinite(value) && !isNaN(value)
}

export default class Number extends Component {

  static defaultProps = {
    onBlur: () => {},
    onFocus: () => {},
    onChange: () => {},
  }

  onUpdate(e) {
    const value = isNumber(parseInt(e.target.value)) ? parseInt(e.target.value) : null

    this.props.onBlur(value, e)
    this.props.onFocus(value, e)
    this.props.onChange(value, e)
  }

  render() {
    return (
      <input {...this.props}
             onBlur={(e) => { this.onUpdate(e) }}
             onFocus={(e) => { this.onUpdate(e) }}
             onChange={(e) => { this.onUpdate(e) }} />
    )
  }
}
