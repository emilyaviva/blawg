import React from 'react'
import Entries from './Entries'
import { Link } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Entries />
      </div>
    )
  }
}

export default App
