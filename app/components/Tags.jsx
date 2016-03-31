import React from 'react'

class Tags extends React.Component {
  render() {
    const {
      tags
    } = this.props
    return (
      <div className="Tags">
        {tags.map(tag => {
          return <span key={tag.id}><a href="/tags/{tag}">{tag}</a>{' '}</span>
        })}
      </div>
    )
  }
}

export default Tags
