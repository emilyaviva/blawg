import React from 'react'
import axios from 'axios'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
const Loader = require('react-loader')
import { Link } from 'react-router'

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
                <article key={entry._id} className="entry">
                  <h2>
                    <Link to={`/entries/${entry._id}`}>
                      {entry.title}
                    </Link>
                  </h2>
                  <h4>{moment(new Date(entry.date)).format('D MMMM YYYY')}</h4>
                  <ReactMarkdown source={entry.body} />
                  {entry.tags.map((tag, idx) =>
                    <span key={idx}>
                      <a href={`/tags/${tag}`}>{tag}</a>
                      {' '}
                    </span>
                  )}
                </article>
              )
            : <article className="no-entries">No entries</article>
          }
        </Loader>
      </div>
    )
  }
}

export default Entries
