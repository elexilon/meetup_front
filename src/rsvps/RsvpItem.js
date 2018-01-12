import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RsvpItem extends PureComponent {
  static propTypes = {
      rsvp: PropTypes.object.isRequired
  }

  render() {

    const { event, member } = this.props

    return(
      <article className="recipe">
        <div>
          <p>{ event.event_name }</p>
          <p>{ member.member_name }</p>
          <img src={ member.photo } alt="" />
        </div>
      </article>
    )
  }
}

export default RsvpItem
