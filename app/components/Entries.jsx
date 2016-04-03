import React from 'react'
import axios from 'axios'
import moment from 'moment'
const Loader = require('react-loader')
import { Link } from 'react-router'
import Entry from './Entry'

class Entries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      entries: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/entries')
      .then(res => {
        this.setState({
          loaded: true,
          entries: res.data
        })
      })
      .catch(err => console.error(err))
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="Entries">
        <Loader loaded={this.state.loaded}>
          {this.state.entries.length
            ? this.state.entries.map(entry =>
                <Entry
                  key={entry._id}
                  id={entry._id}
                  title={entry.title}
                  body={entry.body}
                  tags={entry.tags}
                  date={entry.date}
                />
              )
            : <article className="no-entries">No entries</article>
          }
        </Loader>
      </div>
    )
  }
}

export default Entries
