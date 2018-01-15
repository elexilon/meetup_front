import React, { PureComponent } from 'react'
import RsvpItem from './RsvpItem'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import { connect } from 'react-redux'

export class RsvpList extends PureComponent {
  static propTypes = {
    rsvps: PropTypes.arrayOf(PropTypes.object).isRequired
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
        { this.props.rsvps.map(this.renderRsvpList) }
      </div>
    )
  }
}

const mapStateToProps = ({ rsvps }) => ({
  rsvps
})

export default connect(mapStateToProps)(RsvpList)
