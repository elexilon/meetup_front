import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'

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
      <header>
        <Title content="Topics Top 10" />
      </header>
      <main>
        { this.props.topics.map(this.renderTopic) }
      </main>
      </div>
    )
  }
}

export default TopicsList
