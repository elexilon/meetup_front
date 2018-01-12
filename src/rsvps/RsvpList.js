import React, { PureComponent } from 'react'
import RsvpItem from './RsvpItem'
import PropTypes from 'prop-types'
import Title from '../components/Title'

class RsvpList extends PureComponent {
  static propTypes = {
    RsvpList: PropTypes.arrayOf(RsvpItem)
  }

  renderRsvpList(rsvp, index) {
    console.log(rsvp)
    return <RsvpItem key={index} { ...rsvp } />
  }

  render() {
    return(
      <div className="Topics wrapper">
        <header>
          <Title content="Rsvp list" />
        </header>
        { this.props.rsvps.map(this.renderRsvpList) }
      </div>
    )
  }
}

export default RsvpList
