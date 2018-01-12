import React, { PureComponent } from 'react'

class RsvpItem extends PureComponent {
  render() {
    const { event, member } = this.props

    return(
      <article className="recipe">
        <div>
          <p>{ event.event_name }</p>
          <p>{ member.member_name }</p>
        </div>
      </article>
    )
  }
}

export default RsvpItem
