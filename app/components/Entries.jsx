import React from 'react'
import axios from 'axios'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'

class Entries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    axios
      .get('//localhost:3000/entries')
      .then(res => {
        this.setState({
          entries: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div className="Entries">
        {this.state.entries.length
          ? this.state.entries.map(entry =>
              <article key={entry.key} className="entry">
                <h2>{entry.title}</h2>
                <h4>{moment(new Date(entry.date)).format('D MMMM YYYY')}</h4>
                <ReactMarkdown source={entry.body} />
                <h4>
                  {entry.tags.length
                    ? `Tags: ${entry.tags.join(', ')}`
                    : 'Not tagged'
                  }
                </h4>
              </article>
            )
          : <article className="no-entries">No entries</article>
        }
      </div>
    )
  }
}

export default Entries
