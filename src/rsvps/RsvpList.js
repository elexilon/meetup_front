import React, { PureComponent } from 'react'
import RsvpItem from './RsvpItem'
import PropTypes from 'prop-types'
import Title from '../components/Title'

class RsvpList extends PureComponent {
  static propTypes = {
    rsvplist: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  renderRsvpList(rsvp, index) {
    return <RsvpItem key={index} { ...rsvp } />
  }

  render() {
    return(
      <div className="Topics wrapper">
        <header>
          <Title content="Rsvp list" />
        </header>
        { this.props.rsvplist.map(this.renderRsvpList) }
      </div>
    )
  }
}

export default RsvpList
