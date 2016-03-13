import React from 'react'
import aja from 'aja'
import ReactMarkdown from 'react-markdown'

class Entries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    aja()
      .url('//localhost:3000/entries')
      .type('json')
      .on('success', entries => {
        this.setState({
          entries
        })
      })
      .go()
  }

  render() {
    return (
      <div className="entries">
        {this.state.entries.length
          ? this.state.entries.map(entry =>
              <article key={entry.key} className="entry">
                <h2>{entry.title}</h2>
                <ReactMarkdown source={entry.body} />
              </article>
            )
          : <article className="no-entries">No entries</article>
        }
      </div>
    )
  }
}

export default Entries
