import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import Entry from './Entry'
const Loader = require('react-loader')

class ConnectedEntry extends React.Component {
  componentDidMount() {
    axios
      .get(`http://localhost:3000/entries/${this.props.id}`)
      .then(res => {
        this.setState({
          loaded: true,
          entry: res.data
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Loader loaded={this.state.loaded}>
        <Entry
          id={this.state.entry._id}
          title={this.state.entry.title}
          body={this.state.entry.body}
          tags={this.state.entry.tags}
          date={this.state.entry.date}
        />
      </Loader>
    )
  }
}

export default Entry
