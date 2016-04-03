import React from 'react'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router'

const Entry = ({ id, date, title, body, tags }) => (
  <article key={id} className="Entry">
    <h2>
      <Link to={`/entries/${id}`}>
        {title}
      </Link>
    </h2>
    <h4>{moment(new Date(date)).format('D MMMM YYYY')}</h4>
    <ReactMarkdown source={body} />
    {tags.map((tag, idx) =>
      <span key={idx}>
        <Link to={`/tags/${tag}`}>
          {tag}
        </Link>
        {' '}
      </span>
    )}
  </article>
)

export default Entry
