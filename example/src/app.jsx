import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Number from '../../src/Number'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: null
    }
  }

  updateProp(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <Number value={this.state.value} onChange={(value) => { this.updateProp(value) }} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
