import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class TopicsList extends PureComponent {
  static propTypes = {
	  topics: PropTypes.arrayOf(PropTypes.shape({
		  topic: PropTypes.string.isRequired,
		  count: PropTypes.number.isRequired
	}))
}

  renderTopic(topic) {
    return (
      <li key={topic.topic} className="topic">
        <h1>{ topic.topic } ({topic.count})</h1>
      </li>
    )
  }

  render() {
    return(

      <div className="Topics wrapper">
      <main>
        { this.props.topics.map(this.renderTopic) }
      </main>
      </div>
    )
  }
}

export default TopicsList
