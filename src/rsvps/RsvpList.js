import React, { PureComponent } from 'react'
import RsvpItem from './RsvpItem'
import PropTypes from 'prop-types'

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
          { this.props.rsvps.map(this.renderRsvpList) }
      </div>
    )
  }
}

export default RsvpList
